import DishItem from "../DishItem";
import useAppDispatch from "@modules/common/hooks/useAppDispatch";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import { Theme, Sizing } from "src/styles";
import { partition } from "@modules/menu/utils/partition";
import MainDishCarousel from "@modules/menu/components/MainDishCarousel";
import useFetchMenu from "../../hooks/useFetchMenu";
import React, { memo, useMemo, useState } from "react";
import { setMenu } from "../../../../redux/features/menuSlice";
import { View, FlatList, RefreshControl } from "react-native";
import EmptyState from "@modules/menu/components/EmptyState";
import SubHeader from "../SubHeader";

type MealMenuProps = {
    mealMenu: BreakfastMeal | LunchMeal | DinnerMeal;
    mealType: "Desjejum" | "Almoço" | "Jantar";
    time: string;
};

function DishList({ mealMenu, mealType, time }: MealMenuProps): React.ReactElement {
    const [refreshing, setRefreshing] = useState(false);
    const dispatch = useAppDispatch();
    const fetchMenu = useFetchMenu();
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

    return (
        <View style={{ flex: 1, backgroundColor: Theme[theme].background_default }}>
            {isMenuAvailable() ? (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() => (
                        <View
                            style={{
                                paddingHorizontal:
                                    Sizing.screen.width >= 768 ? Sizing.layout.x10 : 0,
                            }}
                        >
                            <SubHeader mealType={mealType} time={time} />
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
        </View>
    );
}

export default memo(DishList);
