import React, { memo } from "react";
import DishItem from "../DishItem";
import SubHeader from "../SubHeader";
import { View, FlatList } from "react-native";
import * as colors from "../../styles/colors";

type MealMenuProps = {
    mealType: string;
    mealMenu: any;
};

const mealTypeTime = {
    Desjejum: "6h - 9h",
    Almoço: "12h - 14h",
    Jantar: "17h - 19h",
};

function DishList({ mealType, mealMenu }: MealMenuProps): React.ReactElement {
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
                contentContainerStyle={{ backgroundColor: colors.primary.brand }}
            />
        </View>
    );
}

export default memo(DishList);
