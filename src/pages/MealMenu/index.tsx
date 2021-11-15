import React from "react";
import DishItem from "../../components/DishItem";
import SubHeader from "../../components/SubHeader";
import { View, FlatList } from "react-native";

type MealMenuProps = {
    mealCategory: "Desjejum" | "Almoço" | "Jantar";
};

const data = {
    Desjejum: [
        {
            id: 1,
            label: "Prato Padrão",
            dish: "Salsicha ao molho",
        },
        {
            id: 2,
            label: "Prato Vegetariano",
            dish: "Pasta de ervas finas",
        },
        {
            id: 3,
            label: "Prato Ovolactovegetariano",
            dish: "Pasta de ervas finas",
        },
        {
            id: 4,
            label: "Fruta",
            dish: "Melão",
        },
        {
            id: 5,
            label: "Pão padrão / ovolacto",
            dish: "Pão careca",
        },
        {
            id: 6,
            label: "Pão vegetariano",
            dish: "Pão francês",
        },
        {
            id: 7,
            label: "Gordura",
            dish: "Manteiga e creme vegetal",
        },
        {
            id: 8,
            label: "Opção extra",
            dish: "",
        },
        {
            id: 9,
            label: "Leite",
            dish: "Leite de vaca integral",
        },
        {
            id: 10,
            label: "Bebida",
            dish: "Café e chás variados e sem açucar",
        },
        {
            id: 11,
            label: "Composto vegetal",
            dish: "Soja",
        },
    ],
    Almoço: [
        {
            id: 1,
            label: "Prato Principal",
            dish: "Cubos de frango ao molho requeijão",
        },
        {
            id: 2,
            label: "Prato Vegetariano",
            dish: "Caruru com grão de bico e abóbora assada",
        },
        {
            id: 3,
            label: "Prato Ovolactovegetariano",
            dish: "Caruru com grão de bico e abóbora assada",
        },
        {
            id: 4,
            label: "Guarnição",
            dish: "Batata doce assada",
        },
        {
            id: 5,
            label: "Acompanhamentos",
            dish: "Arroz branco, arroz integral, feijão carioca",
        },
        {
            id: 6,
            label: "Salada 1",
            dish: "Alface  com manjericão",
        },
        {
            id: 7,
            label: "Salada 2",
            dish: "Rúcula",
        },
        {
            id: 8,
            label: "Molho",
            dish: "Molho ácido",
        },
        {
            id: 9,
            label: "Sobremesa",
            dish: "Mamão",
        },
        {
            id: 10,
            label: "Bebida",
            dish: "Refresco de Manga",
        },
    ],
    Jantar: [
        {
            id: 1,
            label: "Prato Padrão",
            dish: "Isca de carne de sol",
        },
        {
            id: 2,
            label: "Prato Vegetariano",
            dish: "Torta de vegetais com creme de cebola",
        },
        {
            id: 3,
            label: "Prato Ovolactovegetariano",
            dish: "Torta de vegetais com creme de cebola",
        },
        {
            id: 4,
            label: "Sopa",
            dish: "Creme de mandioca",
        },
        {
            id: 5,
            label: "Acompanhamentos",
            dish: "Arroz branco, arroz integral, feijão carioca",
        },
        {
            id: 6,
            label: "Salada 1",
            dish: "Chicória com abacaxi ",
        },
        {
            id: 7,
            label: "Salada 2",
            dish: "Tomate",
        },
        {
            id: 8,
            label: "Molho",
            dish: "Limão",
        },
        {
            id: 9,
            label: "Sobremesa",
            dish: "Tangerina",
        },
        {
            id: 10,
            label: "Bebida",
            dish: "Refresco de Laranja",
        },
    ],
};

export default function MealMenu({ mealCategory }: MealMenuProps): React.ReactElement {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => <SubHeader mealType={mealCategory} time="6h - 9h" />}
                data={data[mealCategory]}
                renderItem={({ item }) => <DishItem label={item.label} dish={item.dish} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}
