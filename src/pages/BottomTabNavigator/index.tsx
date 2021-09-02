import React from "react";
import MealMenu from "../MealMenu";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BreakfastIcon from "../../components/Svg/BreakfastIcon";
import LunchIcon from "../../components/Svg/LunchIcon";
import DinnerIcon from "../../components/Svg/DinnerIcon";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator(): React.ReactElement {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: "white" }} activeColor="#3AB449">
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
