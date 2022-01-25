import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import BottomTabNavigator from "../BottomTabNavigator";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import api from "../../services/api";
import ActivityIndicatorBox from "../../components/ActivityIndicatorBox";

type TopTabNavigatorProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator({ route }: TopTabNavigatorProps): React.ReactElement {
    const [weekMenu, setWeekMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get("/week_menu")
            .then((res) => {
                setWeekMenu(res.data);
                setLoading(false);
            })
            .catch((e) => {
                console.log(e);
                setLoading(false);
            });
    }, []);

    return !loading ? (
        <Stack.Navigator
            screenOptions={{
                header: (props) => <Header {...props} />,
            }}
        >
            <Stack.Screen name={weekMenu[0].date}>
                {(props) => <BottomTabNavigator {...props} dayMenu={weekMenu[0]} />}
            </Stack.Screen>
            <Stack.Screen name={weekMenu[1].date}>
                {(props) => <BottomTabNavigator {...props} dayMenu={weekMenu[1]} />}
            </Stack.Screen>
            <Stack.Screen name={weekMenu[2].date}>
                {(props) => <BottomTabNavigator {...props} dayMenu={weekMenu[2]} />}
            </Stack.Screen>
            <Stack.Screen name={weekMenu[3].date}>
                {(props) => <BottomTabNavigator {...props} dayMenu={weekMenu[3]} />}
            </Stack.Screen>
            <Stack.Screen name={weekMenu[4].date}>
                {(props) => <BottomTabNavigator {...props} dayMenu={weekMenu[4]} />}
            </Stack.Screen>
            <Stack.Screen name={weekMenu[5].date}>
                {(props) => <BottomTabNavigator {...props} dayMenu={weekMenu[5]} />}
            </Stack.Screen>
            <Stack.Screen name={weekMenu[6].date}>
                {(props) => <BottomTabNavigator {...props} dayMenu={weekMenu[6]} />}
            </Stack.Screen>
        </Stack.Navigator>
    ) : (
        <ActivityIndicatorBox />
    );
}
