import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import BottomTab from "../../components/BottomTab";
import BreakfastIcon from "../../components/Svg/BreakfastIcon";
import DinnerIcon from "../../components/Svg/DinnerIcon";
import LunchIcon from "../../components/Svg/LunchIcon";
import MealMenu from "../MealMenu";

const Tab = createMaterialTopTabNavigator();

export default function BottomTabNavigator(): React.ReactElement {
    return (
        <Tab.Navigator tabBar={BottomTab} tabBarPosition="bottom">
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
