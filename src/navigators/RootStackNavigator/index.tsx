import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useFetchMenu from "../../hooks/useFetchMenu";
import ActivityIndicatorBox from "../../components/ActivityIndicatorBox";
import Header from "../../components/Header";
import DayIndexContextProvider from "../../context/DayIndexContext";
import OnBoarding from "../../pages/OnBoarding";
import Settings from "../../pages/Settings";
import BottomTabNavigator from "../BottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator(): React.ReactElement {
    const [menu, setMenu] = useState<WeekMenu>([]);
    const [dayIndex, setDayIndex] = useState(0);
    const fetchMenu = useFetchMenu();

    async function setAndFetchMenu() {
        const data = await fetchMenu();
        setMenu(data);
    }

    useEffect(() => {
        setAndFetchMenu();
    }, []);

    return (
        <DayIndexContextProvider value={{ menu, setMenu, dayIndex, setDayIndex }}>
            <Stack.Navigator>
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                    options={{ headerShown: false }}
                />
                {menu ? (
                    <Stack.Screen
                        name="Menu"
                        options={{
                            header: (props) => <Header {...props} />,
                        }}
                    >
                        {() => <BottomTabNavigator />}
                    </Stack.Screen>
                ) : (
                    <Stack.Screen name="Loading" component={ActivityIndicatorBox} />
                )}
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        title: "Configurações",
                    }}
                />
            </Stack.Navigator>
        </DayIndexContextProvider>
    );
}
