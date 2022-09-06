import DishItem from "../DishItem";
import SubHeader from "../SubHeader";
import { Colors } from "../../styles";
import useFetchMenu from "../../hooks/useFetchMenu";
import React, { memo, useContext, useMemo, useState } from "react";
import { View, FlatList, RefreshControl, Dimensions } from "react-native";
import { GeneralContext } from "../../context/GeneralContext";
import MainDish from "../MainDish";
import Carousel from "react-native-reanimated-carousel";
import PagerView from "react-native-pager-view";

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
                ListHeaderComponent={() => (
                    <PagerView
                        style={{ flex: 1, height: 180, width: Dimensions.get("window").width }}
                        initialPage={0}
                        overScrollMode="auto"
                        overdrag
                    >
                        {main.map((item) => (
                            <MainDish label={item[0]} dish={item[1]} key={item[0]} />
                        ))}
                    </PagerView>
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
