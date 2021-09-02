import React from "react";
import MealMenu from "../MealMenu";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator(): React.ReactElement {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
            <Tab.Screen name="Desjejum" component={MealMenu} />
            <Tab.Screen name="Almoço" component={MealMenu} />
            <Tab.Screen name="Jantar" component={MealMenu} />
        </Tab.Navigator>
    );
}
