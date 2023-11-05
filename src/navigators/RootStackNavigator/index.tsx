import Header from "../../components/Header";
import OnBoarding from "../../pages/OnBoarding";
import { getMealByTime } from "../../utils/date";
import useFetchMenu from "../../hooks/useFetchMenu";
import { getApropriateDate } from "../../utils/date";
import useAppDispatch from "src/hooks/useAppDispatch";
import useAppSelector from "src/hooks/useAppSelector";
import BottomTabNavigator from "../BottomTabNavigator";
import { setMenu } from "../../redux/features/menuSlice";
import { setMeal } from "../../redux/features/mealSlice";
import { GeneralContext } from "../../context/GeneralContext";
import React, { useContext, useEffect, useState } from "react";
import SettingsStackNavigator from "../SettingsStackNavigator";
import { setDayIndex } from "../../redux/features/dayIndexSlice";
import ActivityIndicatorBox from "../../components/ActivityIndicatorBox";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarPickerModal from "src/components/CalendarPickerModal";
import CampusPickerModal from "src/components/CampusPickerModal";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator(): React.ReactElement | null {
    const { isFirstLaunch } = useContext(GeneralContext);
    const selectedCampus = useAppSelector((state) => state.campus);
    const fetchMenu = useFetchMenu(selectedCampus);
    const meal = useAppSelector((state) => state.meal);
    const dispatch = useAppDispatch();
    const [menuReady, setMenuReady] = useState(false);

    useEffect(() => {
        dispatch(setDayIndex(getApropriateDate()));
        dispatch(setMeal(getMealByTime()));
        const fetchData = async () => {
            fetchMenu()
                .then((res) => {
                    dispatch(setMenu(res));
                })
                .finally(() => setMenuReady(true));
        };
        fetchData();
    }, [selectedCampus]);

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
            <Stack.Group screenOptions={{ presentation: "transparentModal", headerShown: false }}>
                <Stack.Screen name="CalendarPickerModal" component={CalendarPickerModal} />
                <Stack.Screen name="CampusPickerModal" component={CampusPickerModal} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
