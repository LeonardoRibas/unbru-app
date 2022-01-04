import {
    createMaterialTopTabNavigator,
    MaterialTopTabNavigationProp,
} from "@react-navigation/material-top-tabs";
import React, { memo } from "react";
import BreakfastIcon from "../../../assets/icons/breakfast.svg";
import DinnerIcon from "../../../assets/icons/dinner.svg";
import LunchIcon from "../../../assets/icons/lunch.svg";
import DishList from "../../components/DishList";
import { Colors, Typography, Sizing } from "../../styles";

const Tab = createMaterialTopTabNavigator();

type BottomTabNavigatorProps = MaterialTopTabNavigationProp<BottomTabParamList> & {
    dayMenu: any;
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
                    tabBarIcon: ({ color }) => <BreakfastIcon fill={color} />,
                    title: "Desjejum",
                }}
            >
                {(props) => (
                    <DishList {...props} mealType="Desjejum" mealMenu={dayMenu["breakfast"]} />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Almoço"
                options={{ tabBarIcon: ({ color }) => <LunchIcon fill={color} /> }}
            >
                {(props) => <DishList {...props} mealType="Almoço" mealMenu={dayMenu["lunch"]} />}
            </Tab.Screen>
            <Tab.Screen
                name="Jantar"
                options={{ tabBarIcon: ({ color }) => <DinnerIcon fill={color} /> }}
            >
                {(props) => <DishList {...props} mealType="Jantar" mealMenu={dayMenu["dinner"]} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

export default memo(BottomTabNavigator);
