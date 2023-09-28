import { View } from "react-native";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import DishList from "../../components/DishList";
import CustomIcon from "../../components/CustomIcon";
import { Colors, Typography, Sizing } from "../../styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

type BottomTabNavigatorMobileProps = {
    mealTime: "" | "Desjejum" | "Almoço" | "Jantar" | undefined;
};

function BottomTabNavigatorMobile({ mealTime }: BottomTabNavigatorMobileProps) {
    const menu = useSelector((state) => state.menu);
    const dayIndex = useSelector((state) => state.dayIndex);
    const dayMenu = menu[dayIndex];
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{ flex: 1, paddingBottom: insets.bottom, backgroundColor: Colors.neutral.white }}
        >
            <Tab.Navigator
                initialRouteName={mealTime}
                tabBarPosition="bottom"
                screenOptions={{
                    swipeEnabled: false,
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
                        tabBarIcon: ({ focused, color }) => (
                            <CustomIcon
                                name={focused ? "breakfast-fill" : "breakfast-outline"}
                                size={20}
                                color={color}
                            />
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
                        tabBarIcon: ({ focused, color }) => (
                            <CustomIcon
                                name={focused ? "lunch-fill" : "lunch-outline"}
                                size={20}
                                color={color}
                            />
                        ),
                    }}
                >
                    {(props) => (
                        <DishList {...props} mealType="Almoço" mealMenu={dayMenu["almoco"]} />
                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="Jantar"
                    options={{
                        tabBarIcon: ({ focused, color }) => (
                            <CustomIcon
                                name={focused ? "dinner-fill" : "dinner-outline"}
                                size={20}
                                color={color}
                            />
                        ),
                    }}
                >
                    {(props) => (
                        <DishList {...props} mealType="Jantar" mealMenu={dayMenu["jantar"]} />
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    );
}

function BottomTabNavigatorWeb() {
    const menu = useSelector((state) => state.menu);
    const dayIndex = useSelector((state) => state.dayIndex);
    const dayMenu = menu[dayIndex];

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: Colors.neutral.white,
                paddingHorizontal: Sizing.margin.base,
            }}
        >
            <DishList mealType="Desjejum" mealMenu={dayMenu["desjejum"]} />
            <DishList mealType="Almoço" mealMenu={dayMenu["almoco"]} />
            <DishList mealType="Jantar" mealMenu={dayMenu["jantar"]} />
        </View>
    );
}

export default memo(Sizing.screen.width >= 768 ? BottomTabNavigatorWeb : BottomTabNavigatorMobile);
