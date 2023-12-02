import React, { memo, useMemo, useState, useCallback, useRef } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { Theme } from "src/styles";

import DishItem from "../DishItem";
import useAppDispatch from "src/hooks/useAppDispatch";
import useAppSelector from "src/hooks/useAppSelector";
import { partition } from "src/utils/partition";
import MainDishCarousel from "src/components/MainDishCarousel";
import useFetchMenu from "src/hooks/useFetchMenu";
import { setMenu } from "src/redux/features/menuSlice";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";
import EmptyState from "src/components/EmptyState";
import SubHeader from "../SubHeader";
import * as Sharing from "expo-sharing";
import ViewShot from "react-native-view-shot";
import ShareMealCard from "../ShareMealCard";

type MealMenuProps = {
    mealMenu: BreakfastMeal | LunchMeal | DinnerMeal;
    mealType: "Desjejum" | "Almoço" | "Jantar";
    time: string;
};

function DishList({ mealMenu, mealType, time }: MealMenuProps): React.ReactElement {
    const [refreshing, setRefreshing] = useState(false);
    const selectedCampus = useAppSelector((state) => state.campus);
    const fetchMenu = useFetchMenu(selectedCampus);
    const dispatch = useAppDispatch();
    const adUnitId = __DEV__ ? TestIds.BANNER : "ca-app-pub-7231147932250814/7932106851";
    const viewShotRef = useRef<ViewShot>(null);
    const theme = useAppSelector((state) => state.theme);

    const [main, extras] = useMemo(
        () =>
            partition(
                Object.entries(mealMenu).filter(([, value]) => value !== ""),
                ([key]) => key.includes("principal") || key.includes("Complemento")
            ),
        [mealMenu]
    );

    const onRefresh = async () => {
        setRefreshing(true);
        const data = await fetchMenu();
        dispatch(setMenu(data));
        setRefreshing(false);
    };

    const isMenuAvailable = () => {
        if (main.length === 0) {
            return false;
        } else {
            return true;
        }
    };

    const captureViewShot = useCallback(() => {
        if (viewShotRef.current && viewShotRef.current.capture) {
            viewShotRef.current.capture().then((uri: string) => {
                Sharing.shareAsync(uri, { dialogTitle: `Compartilhar ${mealType}` });
            });
        }
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: Theme[theme].background_default }}>
            {isMenuAvailable() ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => (
                        <View>
                            <SubHeader
                                mealType={mealType}
                                time={time}
                                onShareClick={captureViewShot}
                            />
                            <MainDishCarousel items={main} />
                        </View>
                    )}
                    data={extras}
                    renderItem={({ item }) => <DishItem label={item[0]} dish={item[1]} />}
                    keyExtractor={(_, index) => index.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={[Theme[theme].color_primary]}
                        />
                    }
                />
            ) : (
                <EmptyState />
            )}
            <ShareMealCard ref={viewShotRef} main={main} mealType={mealType} />
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </View>
    );
}

export default memo(DishList);
