import React from "react";
import Header from "../../components/Header";
import BottomTabNavigator from "../BottomTabNavigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator({ route }): React.ReactElement {
    return (
        <Tab.Navigator
            screenOptions={{ swipeEnabled: false }}
            tabBar={(props) => (
                <Header {...props} title={getFocusedRouteNameFromRoute(route) ?? "Segunda"} />
            )}
        >
            <Tab.Screen name="Segunda" component={BottomTabNavigator} />
            <Tab.Screen name="Terça" component={BottomTabNavigator} />
            <Tab.Screen name="Quarta" component={BottomTabNavigator} />
            <Tab.Screen name="Quinta" component={BottomTabNavigator} />
            <Tab.Screen name="Sexta" component={BottomTabNavigator} />
            <Tab.Screen name="Sábado" component={BottomTabNavigator} />
            <Tab.Screen name="Domingo" component={BottomTabNavigator} />
        </Tab.Navigator>
    );
}
