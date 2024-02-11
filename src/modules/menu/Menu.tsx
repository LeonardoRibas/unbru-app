import { View } from "react-native";
import React, { memo } from "react";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import DishList from "@modules/menu/components/DishList";
import CustomIcon from "@modules/menu/components/CustomIcon";
import { Typography, Sizing, Theme } from "src/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

type MenuProps = {
    mealType: string;
};

function Menu({ mealType }: MenuProps) {
    const menu = useAppSelector((state) => state.menu);
    const dayIndex = useAppSelector((state) => state.dayIndex);
    const dayMenu = menu[dayIndex];
    const insets = useSafeAreaInsets();
    const theme = useAppSelector((state) => state.theme);

    return (
        <View
            style={{
                flex: 1,
                paddingBottom: insets.bottom,
                backgroundColor: Theme[theme].background_default,
            }}
        >
            <Tab.Navigator
                initialRouteName={mealType}
                tabBarPosition="bottom"
                screenOptions={{
                    swipeEnabled: false,
                    tabBarActiveTintColor: Theme[theme].color_primary,
                    tabBarInactiveTintColor: Theme[theme].text_secondary,
                    tabBarPressColor: Theme[theme].background_card, // Disables ripple effect on Android
                    tabBarItemStyle: {
                        paddingVertical: 4,
                        paddingHorizontal: 0,
                        backgroundColor: Theme[theme].background_default,
                    },
                    tabBarIconStyle: {
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 2,
                    },
                    tabBarLabelStyle: {
                        margin: 0,
                        fontFamily: Typography.fontWeight.regular,
                        fontSize: Typography.fontSize.x05,
                        textTransform: "none", // Disables default uppercase letters
                    },
                    tabBarIndicatorStyle: {
                        top: -2,
                        left: Sizing.margin.base, // Compensates and centrilizes the indicator, because of the double margin taken away below
                        width: Sizing.screen.width / 3 - Sizing.margin.base * 2,
                        backgroundColor: Theme[theme].color_primary,
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
                        <DishList
                            {...props}
                            mealMenu={dayMenu["desjejum"]}
                            mealType="Desjejum"
                            time="7h - 9h30"
                        />
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
                        <DishList
                            {...props}
                            mealMenu={dayMenu["almoco"]}
                            mealType="Almoço"
                            time="11h - 14h30"
                        />
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
                        <DishList
                            {...props}
                            mealMenu={dayMenu["jantar"]}
                            mealType="Jantar"
                            time="17h - 19h30"
                        />
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    );
}

function MenuWeb() {
    const menu = useAppSelector((state) => state.menu);
    const dayIndex = useAppSelector((state) => state.dayIndex);
    const dayMenu = menu[dayIndex];
    const theme = useAppSelector((state) => state.theme);

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: Theme[theme].background_default,
                paddingHorizontal: Sizing.margin.base,
                justifyContent: "center",
                gap: 16,
            }}
        >
            <View style={{ flex: 1 }}>
                <DishList mealType="Desjejum" mealMenu={dayMenu["desjejum"]} time="7h - 9h30" />
            </View>
            <View style={{ flex: 1 }}>
                <DishList mealType="Almoço" mealMenu={dayMenu["almoco"]} time="11h - 14h30" />
            </View>
            <View style={{ flex: 1 }}>
                <DishList mealType="Jantar" mealMenu={dayMenu["jantar"]} time="17h - 19h30" />
            </View>
        </View>
    );
}

export default memo(Sizing.screen.width >= 768 ? MenuWeb : Menu);
