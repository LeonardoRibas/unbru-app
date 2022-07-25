import React, { useEffect, useState, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Header";
import OnBoarding from "../../pages/OnBoarding";
import BottomTabNavigator from "../BottomTabNavigator";
import SettingsStackNavigator from "../SettingsStackNavigator";
import { GeneralContext } from "../../context/GeneralContext";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator(): React.ReactElement {
    const [mealTime, setMealTime] = useState("");
    const { isFirstLaunch } = useContext(GeneralContext);

    const getMealByTime = () => {
        const currentTime = new Date().getTime();
        const endBreakfast = new Date().setHours(9, 0, 0);
        const endLunch = new Date().setHours(14, 30, 0);
        const endDinner = new Date().setHours(19, 0, 0);

        if (currentTime < endBreakfast || currentTime > endDinner) {
            setMealTime("Desjejum");
        }
        if (endLunch > currentTime && currentTime > endBreakfast) {
            setMealTime("Almoço");
        }
        if (endDinner > currentTime && currentTime > endLunch) {
            setMealTime("Jantar");
        }
    };

    useEffect(() => {
        getMealByTime();
    }, []);

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
                {() => <BottomTabNavigator mealTime={mealTime} />}
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
