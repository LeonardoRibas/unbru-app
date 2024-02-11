import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { Theme } from "../../../../styles";
import useAppSelector from "@modules/common/hooks/useAppSelector";

export default function ActivityIndicatorBox(): React.ReactElement {
    const theme = useAppSelector((state) => state.theme);

    return (
        <View style={[styles.container, { backgroundColor: Theme[theme].background_default }]}>
            <ActivityIndicator size="large" color={Theme[theme].color_primary} />
        </View>
    );
}
