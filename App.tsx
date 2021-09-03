import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import OnBoarding from "./src/pages/OnBoarding";
import { NavigationContainer } from "@react-navigation/native";
import TopTabNavigator from "./src/pages/TopTabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    useFonts,
    Lexend_500Medium,
    Lexend_700Bold,
    Lexend_600SemiBold,
} from "@expo-google-fonts/lexend";

const Stack = createNativeStackNavigator();

export default function App(): React.ReactElement {
    const [fontsLoaded] = useFonts({
        Lexend_500Medium,
        Lexend_700Bold,
        Lexend_600SemiBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StatusBar style="auto" />
                <Stack.Navigator>
                    <Stack.Screen
                        name="OnBoarding"
                        component={OnBoarding}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={TopTabNavigator}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
