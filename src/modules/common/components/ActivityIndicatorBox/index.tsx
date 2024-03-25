import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Theme } from "@modules/common/styles";
import useAppSelector from "@modules/common/hooks/useAppSelector";

export default function ActivityIndicatorBox(): React.ReactElement {
    const theme = useAppSelector((state) => state.theme);

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
