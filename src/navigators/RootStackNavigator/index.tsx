import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useFetchMenu from "../../hooks/useFetchMenu";
import Header from "../../components/Header";
import DayIndexContextProvider from "../../context/DayIndexContext";
import OnBoarding from "../../pages/OnBoarding";
import BottomTabNavigator from "../BottomTabNavigator";
import { checkIfFirstLaunch } from "../../utils/storage";
import AppLoading from "expo-app-loading";
import SettingsStackNavigator from "../SettingsStackNavigator";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator(): React.ReactElement {
    const [menu, setMenu] = useState<WeekMenu>([]);
    const [dayIndex, setDayIndex] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>();
    const fetchMenu = useFetchMenu();
    const [mealTime, setMealTime] = useState("");

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
        async function setUp() {
            const res = await checkIfFirstLaunch();
            setIsFirstLaunch(res);
            const data = await fetchMenu();
            setMenu(data);
            setDayIndex(new Date().toISOString().slice(0, 10));
            getMealByTime();
            setIsLoading(false);
        }
        setUp();
    }, []);

    return (
        <DayIndexContextProvider value={{ menu, setMenu, dayIndex, setDayIndex }}>
            {isLoading ? (
                <AppLoading />
            ) : (
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
            )}
        </DayIndexContextProvider>
    );
}
