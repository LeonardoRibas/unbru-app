import {
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationProp,
} from "@react-navigation/material-top-tabs";
import React, { memo } from "react";
import DishList from "../../components/DishList";
import { Colors, Typography, Sizing } from "../../styles";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import * as selection from "../../../assets/icomoon/selection.json";

export const Icon = createIconSetFromIcoMoon(selection, "IcoMoon", "icomoon.ttf");

const Tab = createMaterialTopTabNavigator();

type BottomTabNavigatorProps = MaterialTopTabNavigationProp<BottomTabParamList> & {
    dayMenu: DayMenu;
};

function BottomTabNavigator({ dayMenu }: BottomTabNavigatorProps): React.ReactElement {
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
                    tabBarIcon: ({ color }) => <Icon name="breakfast" size={24} color={color} />,
                    title: "Desjejum",
                }}
            >
                {(props) => (
                    <DishList {...props} mealType="Desjejum" mealMenu={dayMenu["breakfast"]} />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Almoço"
                options={{
                    tabBarIcon: ({ color }) => <Icon name="lunch" size={24} color={color} />,
                }}
            >
                {(props) => <DishList {...props} mealType="Almoço" mealMenu={dayMenu["lunch"]} />}
            </Tab.Screen>
            <Tab.Screen
                name="Jantar"
                options={{
                    tabBarIcon: ({ color }) => <Icon name="dinner" size={24} color={color} />,
                }}
            >
                {(props) => <DishList {...props} mealType="Jantar" mealMenu={dayMenu["dinner"]} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default memo(BottomTabNavigator);
