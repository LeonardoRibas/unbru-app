import { View } from "react-native";
import React, { memo } from "react";
import useAppSelector from "src/hooks/useAppSelector";
import DishList from "src/components/DishList";
import CustomIcon from "src/components/CustomIcon";
import { Colors, Typography, Sizing } from "src/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SubHeader from "src/components/SubHeader";

const Tab = createBottomTabNavigator();

type BottomTabNavigatorMobileProps = {
    mealTime: "" | "Desjejum" | "Almoço" | "Jantar" | undefined;
};

function BottomTabNavigatorMobile({ mealTime }: BottomTabNavigatorMobileProps) {
    const menu = useAppSelector((state) => state.menu);
    const dayIndex = useAppSelector((state) => state.dayIndex);
    const dayMenu = menu[dayIndex];
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{ flex: 1, paddingBottom: insets.bottom, backgroundColor: Colors.neutral.white }}
        >
            <Tab.Navigator
                initialRouteName={mealTime}
                screenOptions={{
                    tabBarActiveTintColor: Colors.primary.base,
                    tabBarInactiveTintColor: Colors.neutral.s600,
                    tabBarItemStyle: {
                        paddingVertical: 4,
                        paddingHorizontal: 0,
                    },
                    tabBarIconStyle: {
                        justifyContent: "center",
                        alignItems: "center",
                    },
                    tabBarLabelStyle: {
                        margin: 0,
                        fontFamily: Typography.fontWeight.regular,
                        fontSize: Typography.fontSize.x05,
                        textTransform: "none", // Disables default uppercase letters
                    },
                }}
            >
                <Tab.Screen
                    name="Desjejum"
                    options={{
                        header: (props) => (
                            <SubHeader {...props} mealType="Desjejum" time="7h - 9h30" />
                        ),
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
                        header: (props) => (
                            <SubHeader {...props} mealType="Almoço" time="11h - 14h30" />
                        ),
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
                        header: (props) => (
                            <SubHeader {...props} mealType="Jantar" time="17h - 19h30" />
                        ),
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
    const menu = useAppSelector((state) => state.menu);
    const dayIndex = useAppSelector((state) => state.dayIndex);
    const dayMenu = menu[dayIndex];

    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: Colors.neutral.white,
                paddingHorizontal: Sizing.margin.base,
                justifyContent: "center",
                gap: 16,
            }}
        >
            <View style={{ flex: 1 }}>
                <SubHeader mealType="Desjejum" time="7h - 9h30" />
                <DishList mealType="Desjejum" mealMenu={dayMenu["desjejum"]} />
            </View>
            <View style={{ flex: 1 }}>
                <SubHeader mealType="Almoço" time="11h - 14h30" />
                <DishList mealType="Almoço" mealMenu={dayMenu["almoco"]} />
            </View>
            <View style={{ flex: 1 }}>
                <SubHeader mealType="Jantar" time="17h - 19h30" />
                <DishList mealType="Jantar" mealMenu={dayMenu["jantar"]} />
            </View>
        </View>
    );
}

export default memo(Sizing.screen.width >= 768 ? BottomTabNavigatorWeb : BottomTabNavigatorMobile);
