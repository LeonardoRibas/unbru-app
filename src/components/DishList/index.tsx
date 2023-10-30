import DishItem from "../DishItem";
import useAppDispatch from "src/hooks/useAppDispatch";
import useAppSelector from "src/hooks/useAppSelector";
import { Colors, Sizing } from "../../styles";
import { partition } from "../../utils/partition";
import MainDishCarousel from "../MainDishCarousel";
import useFetchMenu from "../../hooks/useFetchMenu";
import React, { memo, useMemo, useState } from "react";
import { setMenu } from "../../redux/features/menuSlice";
import { View, FlatList, RefreshControl } from "react-native";
import EmptyState from "src/components/EmptyState";
import SubHeader from "../SubHeader";

type MealMenuProps = {
    mealMenu: BreakfastMeal | LunchMeal | DinnerMeal;
    mealType: "Desjejum" | "Almoço" | "Jantar";
    time: string;
};

function DishList({ mealMenu, mealType, time }: MealMenuProps): React.ReactElement {
    const [refreshing, setRefreshing] = useState(false);
    const selectedCampus = useAppSelector((state) => state.campus);
    const dispatch = useAppDispatch();
    const fetchMenu = useFetchMenu(selectedCampus);

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
                            colors={[Colors.primary.base]}
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
