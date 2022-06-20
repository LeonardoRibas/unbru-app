import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useFetchMenu from "../../hooks/useFetchMenu";
import Header from "../../components/Header";
import DayIndexContextProvider from "../../context/DayIndexContext";
import OnBoarding from "../../pages/OnBoarding";
import Settings from "../../pages/Settings";
import BottomTabNavigator from "../BottomTabNavigator";
import { checkIfFirstLaunch } from "../../utils/storage";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator(): React.ReactElement {
    const [menu, setMenu] = useState<WeekMenu>([]);
    const [dayIndex, setDayIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>();
    const fetchMenu = useFetchMenu();

    async function setAndFetchMenu() {
        const data = await fetchMenu();
        setMenu(data);
    }

    useEffect(() => {
        async function setUp() {
            const res = await checkIfFirstLaunch();
            setIsFirstLaunch(res);
            await setAndFetchMenu();
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
                    {isFirstLaunch ? (
                        <Stack.Screen
                            name="OnBoarding"
                            component={OnBoarding}
                            options={{ headerShown: false }}
                        />
                    ) : null}
                    <Stack.Screen
                        name="Menu"
                        options={{
                            header: (props) => <Header {...props} />,
                        }}
                    >
                        {() => <BottomTabNavigator />}
                    </Stack.Screen>

                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            title: "Configurações",
                        }}
                    />
                </Stack.Navigator>
            )}
        </DayIndexContextProvider>
    );
}
