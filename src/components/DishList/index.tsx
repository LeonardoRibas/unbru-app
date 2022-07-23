import React, { memo, useContext, useEffect, useState } from "react";
import DishItem from "../DishItem";
import SubHeader from "../SubHeader";
import { View, FlatList, RefreshControl } from "react-native";
import * as colors from "../../styles/colors";
import useFetchMenu from "../../hooks/useFetchMenu";
import { GeneralContext } from "../../context/GeneralContext";
import { Colors } from "../../styles";

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
    const { setMenu, setDayIndex } = useContext(GeneralContext);

    const onRefresh = async () => {
        setRefreshing(true);
        const data = await fetchMenu();
        setDayIndex(0);
        setMenu(data);
        setRefreshing(false);
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <SubHeader mealType={mealType} time={mealTypeTime[mealType]} />
                )}
                data={Object.entries(mealMenu)}
                renderItem={({ item }) => <DishItem label={item[0]} dish={item[1]} />}
                keyExtractor={(item, index) => index.toString()}
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
