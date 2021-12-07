import {
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    useFonts,
} from "@expo-google-fonts/lexend";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackHeader from "./src/components/StackHeader";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import OnBoarding from "./src/pages/OnBoarding";
import Settings from "./src/pages/Settings";
import TopTabNavigator from "./src/pages/TopTabNavigator";

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
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            header: (props) => <StackHeader {...props} title="Configurações" />,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
