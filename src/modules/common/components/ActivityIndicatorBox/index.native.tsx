import React, { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Theme } from "../../../../styles";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import { AppOpenAd, AdEventType, TestIds } from "react-native-google-mobile-ads";

const AppOpenAdUnitId = __DEV__ ? TestIds.APP_OPEN : "ca-app-pub-7231147932250814/5057181053";
const appOpen = AppOpenAd.createForAdRequest(AppOpenAdUnitId);
appOpen.load();

export default function ActivityIndicatorBox(): React.ReactElement {
    const theme = useAppSelector((state) => state.theme);

    useEffect(() => {
        const unsubscribe = appOpen.addAdEventListener(AdEventType.LOADED, () => {
            appOpen.show();
        });
        return unsubscribe;
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Theme[theme].background_default,
            }}
        >
            <ActivityIndicator size="large" color={Theme[theme].color_primary} />
        </View>
    );
}
