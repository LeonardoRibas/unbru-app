import React from "react";
import OnBoarding from "../../pages/OnBoarding";
import HomeStackNavigator from "../HomeStackNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator(): React.ReactElement {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="OnBoarding"
                component={OnBoarding}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
