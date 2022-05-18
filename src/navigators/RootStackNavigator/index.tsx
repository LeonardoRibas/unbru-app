import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useFechMenu from "../../hooks/useFechMenu";
import ActivityIndicatorBox from "../../components/ActivityIndicatorBox";
import Header from "../../components/Header";
import DayIndexContextProvider from "../../context/DayIndexContext";
import OnBoarding from "../../pages/OnBoarding";
import Settings from "../../pages/Settings";
import { getFormatedDate } from "../../utils/date";
import BottomTabNavigator from "../BottomTabNavigator";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator(): React.ReactElement {
    const menu = useFechMenu();
    const [dayIndex, setDayIndex] = useState(0);

    return (
        <DayIndexContextProvider value={{ dayIndex, setDayIndex }}>
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
                            header: (props) => (
                                <Header day={getFormatedDate(menu[dayIndex].date)} {...props} />
                            ),
                        }}
                    >
                        {(props) => <BottomTabNavigator {...props} dayMenu={menu[dayIndex]} />}
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
