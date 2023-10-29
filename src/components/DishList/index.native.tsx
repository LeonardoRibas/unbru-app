import React, { memo, useMemo, useState } from "react";
import { View, FlatList, RefreshControl, Text } from "react-native";
import { Colors } from "src/styles";

import DishItem from "../DishItem";
import useAppDispatch from "src/hooks/useAppDispatch";
import useAppSelector from "src/hooks/useAppSelector";
import { partition } from "src/utils/partition";
import MainDishCarousel from "src/components/MainDishCarousel";
import useFetchMenu from "src/hooks/useFetchMenu";
import { setMenu } from "src/redux/features/menuSlice";
import { BannerAd, BannerAdSize, TestIds } from "react-native-google-mobile-ads";
import EmptyState from "src/components/EmptyState";

type MealMenuProps = {
    mealType: "Desjejum" | "Almoço" | "Jantar";
    mealMenu: BreakfastMeal | LunchMeal | DinnerMeal;
};

function DishList({ mealMenu }: MealMenuProps): React.ReactElement {
    const [refreshing, setRefreshing] = useState(false);
    const selectedCampus = useAppSelector((state) => state.campus);
    const fetchMenu = useFetchMenu(selectedCampus);
    const dispatch = useAppDispatch();
    const adUnitId = __DEV__ ? TestIds.BANNER : "ca-app-pub-7231147932250814/7932106851";

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

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            {isMenuAvailable() ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => <MainDishCarousel items={main} />}
                    data={extras}
                    renderItem={({ item }) => <DishItem label={item[0]} dish={item[1]} />}
                    keyExtractor={(_, index) => index.toString()}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            colors={[Colors.primary.base]}
                        />
                    }
                />
            ) : (
                <EmptyState />
            )}
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
