import React from "react";
import dayjs from "dayjs";
import MealMenu from "../MealMenu";
import LunchIcon from "../../components/Svg/LunchIcon";
import DinnerIcon from "../../components/Svg/DinnerIcon";
import BreakfastIcon from "../../components/Svg/BreakfastIcon";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

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
            activeColor="#3AB449"
        >
            <Tab.Screen
                name="Desjejum"
                component={MealMenu}
                options={{ tabBarIcon: ({ color }) => <BreakfastIcon color={color} /> }}
            />
            <Tab.Screen
                name="Almoço"
                component={MealMenu}
                options={{ tabBarIcon: ({ color }) => <LunchIcon color={color} /> }}
            />
            <Tab.Screen
                name="Jantar"
                component={MealMenu}
                options={{ tabBarIcon: ({ color }) => <DinnerIcon color={color} /> }}
            />
        </Tab.Navigator>
    );
}
