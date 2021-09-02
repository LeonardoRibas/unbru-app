import React from "react";
import DishItem from "../../components/DishItem";
import SubHeader from "../../components/SubHeader";
import { View, FlatList } from "react-native";

const data = [
    {
        id: 1,
        label: "Prato Principal",
        dish: "Lorem ipsum sit amet",
    },
    {
        id: 2,
        label: "Prato Vegetariano",
        dish: "Lorem ipsum sit amet",
    },
    {
        id: 3,
        label: "Guarnição",
        dish: "Lorem ipsum sit amet",
    },
    {
        id: 4,
        label: "Acompanhamentos",
        dish: "Lorem ipsum sit amet",
    },
    {
        id: 5,
        label: "Salada",
        dish: "Lorem ipsum sit amet",
    },
    {
        id: 6,
        label: "Refresco",
        dish: "Lorem ipsum sit amet",
    },
    {
        id: 7,
        label: "Sobremesa",
        dish: "Lorem ipsum sit amet",
    },
    {
        id: 8,
        label: "Sobremesa",
        dish: "Lorem ipsum sit amet",
    },
    {
        id: 9,
        label: "Sobremesa",
        dish: "Lorem ipsum sit amet",
    },
];

export default function MealMenu({ route }): React.ReactElement {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ListHeaderComponent={() => (
                    <SubHeader mealType={route.name} campus="Darcy Ribeiro" time="6h - 9h" />
                )}
                data={data}
                renderItem={({ item }) => <DishItem label={item.label} dish={item.dish} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}
