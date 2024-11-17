import React, { memo, useMemo, useState, useCallback, useRef } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { Theme } from "@modules/common/styles";

import DishItem from "../DishItem";
import useAppDispatch from "@modules/common/hooks/useAppDispatch";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import { partition } from "@modules/menu/utils/partition";
import MainDishCarousel from "@modules/menu/components/MainDishCarousel";
import useFetchMenu from "@modules/menu/hooks/useFetchMenu";
import { setMenu } from "@modules/common/redux/features/menuSlice";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";
import EmptyState from "@modules/menu/components/EmptyState";
import SubHeader from "../SubHeader";
import * as Sharing from "expo-sharing";
import ViewShot from "react-native-view-shot";
import ShareMealCard from "@modules/menu/components/ShareMealCard";

type MealMenuProps = {
    mealMenu: BreakfastMeal | LunchMeal | DinnerMeal;
    mealType: "Desjejum" | "Almoço" | "Jantar";
    time: string;
};

const unbruKeywords = [
    "food",
    "cooking",
    "recipe",
    "meal",
    "lunch",
    "dinner",
    "breakfast",
    "snack",
    "cuisine",
    "restaurant",
    "fast food",
    "meal plan",
];

function DishList({ mealMenu, mealType, time }: MealMenuProps): React.ReactElement {
    const [refreshing, setRefreshing] = useState(false);
    const fetchMenu = useFetchMenu();
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
                    keywords: unbruKeywords,
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </View>
    );
}

export default memo(DishList);
