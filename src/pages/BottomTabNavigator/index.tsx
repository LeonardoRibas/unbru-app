import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import BreakfastIcon from "../../../assets/icons/breakfast.svg";
import DinnerIcon from "../../../assets/icons/dinner.svg";
import LunchIcon from "../../../assets/icons/lunch.svg";
import MealMenu from "../MealMenu";
import { Colors, Typography, Sizing } from "../../styles";

const Tab = createMaterialTopTabNavigator();

export default function BottomTabNavigator(): React.ReactElement {
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={{
                tabBarActiveTintColor: Colors.primary.brand,
                tabBarInactiveTintColor: Colors.neutral.s250,
                tabBarPressColor: Colors.neutral.white, // Disables ripple effect on Android
                tabBarItemStyle: {
                    paddingVertical: 4,
                },
                tabBarLabelStyle: {
                    fontFamily: Typography.fontWeight.semiBold,
                    fontSize: Typography.fontSize.x15,
                    textTransform: "none", // Disables default uppercase letters
                },
                tabBarIndicatorStyle: {
                    top: 0,
                    left: Sizing.margin.base, // Compensates and centrilizes the indicator, because of the double margin taken away below
                    width: Sizing.screen.width / 3 - Sizing.margin.base * 2,
                    backgroundColor: Colors.primary.brand,
                },
            }}
        >
            <Tab.Screen
                name="Desjejum"
                options={{
                    tabBarIcon: ({ color }) => <BreakfastIcon fill={color} />,
                    title: "Desjejum",
                }}
            >
                {() => <MealMenu mealCategory="Desjejum" />}
            </Tab.Screen>
            <Tab.Screen
                name="Almoço"
                options={{ tabBarIcon: ({ color }) => <LunchIcon fill={color} /> }}
            >
                {() => <MealMenu mealCategory="Almoço" />}
            </Tab.Screen>
            <Tab.Screen
                name="Jantar"
                options={{ tabBarIcon: ({ color }) => <DinnerIcon fill={color} /> }}
            >
                {() => <MealMenu mealCategory="Jantar" />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
