import {
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    useFonts,
} from "@expo-google-fonts/lexend";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStackNavigator from "./src/navigators/RootStackNavigator";
import "react-native-url-polyfill/auto";

export default function App(): React.ReactElement {
    const [fontsLoaded] = useFonts({
        IcoMoon: require("./assets/icomoon/fonts/icomoon.ttf"),
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
                <RootStackNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
