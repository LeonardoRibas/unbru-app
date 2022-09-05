import DishItem from "../DishItem";
import SubHeader from "../SubHeader";
import { Colors } from "../../styles";
import useFetchMenu from "../../hooks/useFetchMenu";
import React, { memo, useContext, useMemo, useState } from "react";
import { View, FlatList, RefreshControl, Dimensions } from "react-native";
import { GeneralContext } from "../../context/GeneralContext";
import MainDish from "../MainDish";

type MealMenuProps = {
    mealType: "Desjejum" | "Almoço" | "Jantar";
    mealMenu: BreakfastMeal | LunchMeal | DinnerMeal;
};

const mealTypeTime = {
    Desjejum: "6h - 9h",
    Almoço: "12h - 14:30h",
    Jantar: "17h - 19h",
};

function partition<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]] {
    return arr.reduce(
        ([pass, fail], item) => {
            return predicate(item) ? [[...pass, item], fail] : [pass, [...fail, item]];
        },
        [[], []] as [T[], T[]]
    );
}

function DishList({ mealType, mealMenu }: MealMenuProps): React.ReactElement {
    const [refreshing, setRefreshing] = useState(false);
    const fetchMenu = useFetchMenu();
    const { setMenu } = useContext(GeneralContext);

    const [main, extras] = useMemo(
        () =>
            partition(
                Object.entries(mealMenu).filter(([, value]) => value !== ""),
                ([key, value]) => key.includes("principal") || key.includes("Complemento")
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
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <>
                        <SubHeader mealType={mealType} time={mealTypeTime[mealType]} />
                        <FlatList
                            data={main}
                            keyExtractor={(item) => item[0]}
                            renderItem={({ item }) => <MainDish label={item[0]} dish={item[1]} />}
                            horizontal
                            snapToAlignment="center"
                            snapToInterval={Dimensions.get("window").width - 20}
                            showsHorizontalScrollIndicator={false}
                            decelerationRate="fast"
                        />
                    </>
                )}
                data={extras}
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
