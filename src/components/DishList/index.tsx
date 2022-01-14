import React, { memo, useState } from "react";
import DishItem from "../DishItem";
import SubHeader from "../SubHeader";
import { View, FlatList, Button } from "react-native";
import * as colors from "../../styles/colors";
import WeekCalendarStrip from "../../components/WeekCalendarStrip";
import ModalBottomSheet from "../../components/ModalBottomSheet";

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
    const date = new Date();
    const [showModal, setShowModal] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Button title="Abrir Modal" onPress={() => setShowModal(true)} />
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
            <ModalBottomSheet
                statusBarTranslucent
                animationType="fade"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}
            >
                <WeekCalendarStrip date={date} />
            </ModalBottomSheet>
        </View>
    );
}

export default memo(DishList);
