import Header from "../../components/Header";
import OnBoarding from "../../pages/OnBoarding";
import useFetchMenu from "../../hooks/useFetchMenu";
import { getApropriateDate } from "../../utils/date";
import { useDispatch, useSelector } from "react-redux";
import BottomTabNavigator from "../BottomTabNavigator";
import { setMenu } from "../../redux/features/menuSlice";
import { GeneralContext } from "../../context/GeneralContext";
import React, { useContext, useEffect, useState } from "react";
import SettingsStackNavigator from "../SettingsStackNavigator";
import { setDayIndex } from "../../redux/features/dayIndexSlice";
import ActivityIndicatorBox from "../../components/ActivityIndicatorBox";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator(): React.ReactElement | null {
    const { isFirstLaunch } = useContext(GeneralContext);
    const fetchMenu = useFetchMenu();
    const meal = useSelector((state) => state.meal.value);
    const dispatch = useDispatch();
    const [menuReady, setMenuReady] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            fetchMenu()
                .then((res) => {
                    dispatch(setDayIndex(getApropriateDate()));
                    dispatch(setMenu(res));
                })
                .finally(() => setMenuReady(true));
        };
        fetchData();
    }, []);

    if (!menuReady) {
        return <ActivityIndicatorBox />;
    }

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
