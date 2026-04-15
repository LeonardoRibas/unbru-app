import Header from "@modules/common/components/Header";
import Menu from "@modules/menu";
import { GeneralContext } from "../../context/GeneralContext";
import React, { useContext, Suspense } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalendarPickerModal from "@modules/menu/components/CalendarPickerModal";
import CampusPickerModal from "@modules/common/components/CampusPickerModal";
import { ActivityIndicator, View } from "react-native";

const OnBoarding = React.lazy(() => import("@modules/onboarding"));
const SettingsStackNavigator = React.lazy(() => import("../SettingsStackNavigator"));

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator(): React.ReactElement | null {
    const { isFirstLaunch } = useContext(GeneralContext);

    const LazyFallback = (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
        </View>
    );

    return (
        <Suspense fallback={LazyFallback}>
            <Stack.Navigator screenOptions={{ freezeOnBlur: true }}>
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
                    {() => <Menu />}
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
        </Suspense>
    );
}
