import React from "react";
import dayjs from "dayjs";
import MealMenu from "../MealMenu";
import LunchIcon from "../../components/Svg/LunchIcon";
import DinnerIcon from "../../components/Svg/DinnerIcon";
import BreakfastIcon from "../../components/Svg/BreakfastIcon";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Colors } from "../../styles";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator(): React.ReactElement {
    const nextMeal = (time: number) => {
        if (time >= 20 || time < 9) return "Desjejum";
        else if (time >= 9 || time < 14) return "Almoço";
        else if (time >= 14 || time < 19) return "Jantar";
    };
    return (
        <Tab.Navigator
            initialRouteName={nextMeal(dayjs().hour())}
            barStyle={{ backgroundColor: "white" }}
            activeColor={Colors.primary.brand}
        >
            <Tab.Screen
                name="Desjejum"
                options={{ tabBarIcon: ({ color }) => <BreakfastIcon color={color} /> }}
            >
                {() => <MealMenu mealCategory="Desjejum" />}
            </Tab.Screen>
            <Tab.Screen
                name="Almoço"
                options={{ tabBarIcon: ({ color }) => <LunchIcon color={color} /> }}
            >
                {() => <MealMenu mealCategory="Almoço" />}
            </Tab.Screen>
            <Tab.Screen
                name="Jantar"
                options={{ tabBarIcon: ({ color }) => <DinnerIcon color={color} /> }}
            >
                {() => <MealMenu mealCategory="Jantar" />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
