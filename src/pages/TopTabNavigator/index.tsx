import React from "react";
import dayjs from "dayjs";
import Header from "../../components/Header";
import BottomTabNavigator from "../BottomTabNavigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
    createMaterialTopTabNavigator,
    MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";

type TopTabNavigatorProps = NativeStackScreenProps<RootStackParamList, "TopTabNavigator">;

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator({ route }: TopTabNavigatorProps): React.ReactElement {
    const today = dayjs().format("DD/MM");
    return (
        <Tab.Navigator
            initialRouteName={today}
            tabBar={(props: MaterialTopTabBarProps) => (
                <Header {...props} title={getFocusedRouteNameFromRoute(route) ?? today} />
            )}
        >
            <Tab.Screen name="30/08" component={BottomTabNavigator} />
            <Tab.Screen name="31/08" component={BottomTabNavigator} />
            <Tab.Screen name="01/09" component={BottomTabNavigator} />
            <Tab.Screen name="02/09" component={BottomTabNavigator} />
            <Tab.Screen name="03/09" component={BottomTabNavigator} />
            <Tab.Screen name="04/09" component={BottomTabNavigator} />
            <Tab.Screen name="05/09" component={BottomTabNavigator} />
        </Tab.Navigator>
    );
}
