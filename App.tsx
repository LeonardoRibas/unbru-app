import * as Font from "expo-font";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import "react-native-url-polyfill/auto";
import { persistStore } from "redux-persist";
import * as SplashScreen from "expo-splash-screen";
import { checkIfFirstLaunch } from "./src/modules/common/utils/storage";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GeneralContextProvider from "./src/context/GeneralContext";
import RootStackNavigator from "./src/navigators/RootStackNavigator";
import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration";
import {
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
} from "@expo-google-fonts/lexend";

SplashScreen.preventAutoHideAsync();
const persistor = persistStore(store);

export default function App(): React.ReactElement | null {
    const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
    const [isCampusSelectModalOpen, setIsCampusSelectModalOpen] = useState(false);
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [appIsReady, setAppIsReady] = useState(false);
    const [isFirstLaunch, setIsFirstLaunch] = useState(false);

    useEffect(() => {
        Promise.all([
            Font.loadAsync({
                IcoMoon: require("./assets/icomoon/fonts/icomoon.ttf"),
                Lexend_400Regular,
                Lexend_500Medium,
                Lexend_700Bold,
                Lexend_600SemiBold,
            }),
            checkIfFirstLaunch(),
        ])
            .then((values) => {
                setIsFirstLaunch(values[1]);
            })
            .finally(() => {
                setAppIsReady(true);
            });
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <SafeAreaProvider onLayout={onLayoutRootView}>
            <NavigationContainer>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <GeneralContextProvider
                            value={{
                                isCalendarModalOpen,
                                setIsCalendarModalOpen,
                                isCampusSelectModalOpen,
                                setIsCampusSelectModalOpen,
                                isShareModalOpen,
                                setIsShareModalOpen,
                                isFirstLaunch,
                            }}
                        >
                            <RootStackNavigator />
                        </GeneralContextProvider>
                    </PersistGate>
                </Provider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

serviceWorkerRegistration.register();
