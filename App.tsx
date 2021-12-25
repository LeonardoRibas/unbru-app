import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/navigators/RootStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
    useFonts,
    Lexend_500Medium,
    Lexend_700Bold,
    Lexend_600SemiBold,
} from "@expo-google-fonts/lexend";

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
                <RootStackNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
