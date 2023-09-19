import DishItem from "../DishItem";
import SubHeader from "../SubHeader";
import { useDispatch, useSelector } from "react-redux";
import { Colors, Sizing } from "../../styles";
import { partition } from "../../utils/partition";
import MainDishCarousel from "../MainDishCarousel";
import useFetchMenu from "../../hooks/useFetchMenu";
import React, { memo, useMemo, useState } from "react";
import { setMenu } from "../../redux/features/menuSlice";
import { View, FlatList, RefreshControl } from "react-native";

type MealMenuProps = {
    mealType: "Desjejum" | "Almoço" | "Jantar";
    mealMenu: BreakfastMeal | LunchMeal | DinnerMeal;
};

const mealTypeTime = {
    Desjejum: "7h - 9h30",
    Almoço: "11h - 14h30",
    Jantar: "17h - 19h30",
};

function DishList({ mealType, mealMenu }: MealMenuProps): React.ReactElement {
    const [refreshing, setRefreshing] = useState(false);
    const selectedCampus = useSelector((state) => state.campus);
    const fetchMenu = useFetchMenu(selectedCampus);
    const dispatch = useDispatch();

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

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View
                        style={{
                            paddingHorizontal: Sizing.screen.width >= 768 ? Sizing.layout.x10 : 0,
                        }}
                    >
                        <SubHeader mealType={mealType} time={mealTypeTime[mealType]} />
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
                        colors={[Colors.primary.base]}
                    />
                }
            />
        </View>
    );
}

export default memo(DishList);
