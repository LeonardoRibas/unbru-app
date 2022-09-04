import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Header";
import OnBoarding from "../../pages/OnBoarding";
import BottomTabNavigator from "../BottomTabNavigator";
import SettingsStackNavigator from "../SettingsStackNavigator";
import { GeneralContext } from "../../context/GeneralContext";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator(): React.ReactElement {
    const { isFirstLaunch, meal } = useContext(GeneralContext);

    return (
        <Stack.Navigator>
            {isFirstLaunch && (
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                    options={{ headerShown: false }}
                />
            )}
            <Stack.Screen
                name="Menu"
                options={{
                    title: "Cardápio",
                    header: (props) => <Header {...props} />,
                }}
            >
                {() => (meal ? <BottomTabNavigator mealTime={meal} /> : null)}
            </Stack.Screen>
            <Stack.Screen
                name="Settings"
                component={SettingsStackNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
