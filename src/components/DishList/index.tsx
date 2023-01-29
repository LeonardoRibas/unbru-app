import DishItem from "../DishItem";
import SubHeader from "../SubHeader";
import { Colors } from "../../styles";
import useFetchMenu from "../../hooks/useFetchMenu";
import React, { memo, useContext, useMemo, useState } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { GeneralContext } from "../../context/GeneralContext";
import MainDishCarousel from "../MainDishCarousel";
import { partition } from "../../utils/partition";

type MealMenuProps = {
    mealType: "Desjejum" | "Almoço" | "Jantar";
    mealMenu: BreakfastMeal | LunchMeal | DinnerMeal;
};

const mealTypeTime = {
    Desjejum: "6h - 9h",
    Almoço: "12h - 14:30h",
    Jantar: "17h - 19h",
};

function DishList({ mealType, mealMenu }: MealMenuProps): React.ReactElement {
    const [refreshing, setRefreshing] = useState(false);
    const fetchMenu = useFetchMenu();
    const { setMenu } = useContext(GeneralContext);

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
        setMenu(data);
        setRefreshing(false);
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <SubHeader mealType={mealType} time={mealTypeTime[mealType]} />

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
        </View>
    );
}

export default memo(DishList);
