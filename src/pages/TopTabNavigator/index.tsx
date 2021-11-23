import React from "react";
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
    return (
        <Tab.Navigator
            screenOptions={{ swipeEnabled: false }}
            tabBar={(props: MaterialTopTabBarProps) => (
                <Header {...props} title={getFocusedRouteNameFromRoute(route) ?? "Segunda 28/09"} />
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
