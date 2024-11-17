import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Theme } from "@modules/common/styles";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import { InterstitialAd, AdEventType, TestIds } from "react-native-google-mobile-ads";

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy";

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    keywords: [
        "food",
        "cooking",
        "recipe",
        "meal",
        "lunch",
        "dinner",
        "breakfast",
        "snack",
        "cuisine",
        "restaurant",
        "fast food",
        "meal plan",
    ],
});

export default function ActivityIndicatorBox(): React.ReactElement {
    const theme = useAppSelector((state) => state.theme);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setLoaded(true);
        });
        console.log("rendered");

        // Start loading the interstitial straight away
        interstitial.load();

        // Unsubscribe from events on unmount
        return unsubscribe;
    }, []);

    if (!loaded) {
        return null;
    }

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
