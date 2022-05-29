import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { memo, useContext } from "react";
import DishList from "../../components/DishList";
import { Colors, Typography, Sizing } from "../../styles";
import { View } from "react-native";
import { DayIndexContext } from "../../context/DayIndexContext";
import CustomIcon from "../../components/CustomIcon";

const Tab = createMaterialTopTabNavigator();

function BottomTabNavigatorMobile() {
    const { menu, dayIndex } = useContext(DayIndexContext);
    const dayMenu = menu[dayIndex];
    return (
        <Tab.Navigator
            tabBarPosition="bottom"
            screenOptions={{
                tabBarActiveTintColor: Colors.primary.base,
                tabBarInactiveTintColor: Colors.neutral.s400,
                tabBarPressColor: Colors.neutral.white, // Disables ripple effect on Android
                tabBarItemStyle: {
                    paddingVertical: 4,
                    paddingHorizontal: 0,
                },
                tabBarIconStyle: {
                    margin: 2,
                },
                tabBarLabelStyle: {
                    margin: 0,
                    fontFamily: Typography.fontWeight.semiBold,
                    fontSize: Typography.fontSize.x15,
                    textTransform: "none", // Disables default uppercase letters
                },
                tabBarIndicatorStyle: {
                    top: 0,
                    left: Sizing.margin.base, // Compensates and centrilizes the indicator, because of the double margin taken away below
                    width: Sizing.screen.width / 3 - Sizing.margin.base * 2,
                    backgroundColor: Colors.primary.base,
                },
            }}
        >
            <Tab.Screen
                name="Desjejum"
                options={{
                    tabBarIcon: ({ color }) => (
                        <CustomIcon name="breakfast" size={26} color={color} />
                    ),
                }}
            >
                {(props) => (
                    <DishList {...props} mealType="Desjejum" mealMenu={dayMenu["desjejum"]} />
                )}
            </Tab.Screen>
            <Tab.Screen
                name="Almoço"
                options={{
                    tabBarIcon: ({ color }) => <CustomIcon name="lunch" size={26} color={color} />,
                }}
            >
                {(props) => <DishList {...props} mealType="Almoço" mealMenu={dayMenu["almoco"]} />}
            </Tab.Screen>
            <Tab.Screen
                name="Jantar"
                options={{
                    tabBarIcon: ({ color }) => <CustomIcon name="dinner" size={26} color={color} />,
                }}
            >
                {(props) => <DishList {...props} mealType="Jantar" mealMenu={dayMenu["jantar"]} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

function BottomTabNavigatorWeb() {
    const { menu, dayIndex } = useContext(DayIndexContext);
    const dayMenu = menu[dayIndex];

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
            }}
        >
            <DishList mealType="Desjejum" mealMenu={dayMenu["desjejum"]} />
            <DishList mealType="Almoço" mealMenu={dayMenu["almoco"]} />
            <DishList mealType="Jantar" mealMenu={dayMenu["jantar"]} />
        </View>
    );
}

export default memo(Sizing.screen.width >= 768 ? BottomTabNavigatorWeb : BottomTabNavigatorMobile);
