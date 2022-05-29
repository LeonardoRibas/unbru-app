import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";
import { Colors } from "../../styles";

export default function ActivityIndicatorBox(): React.ReactElement {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={Colors.primary.base} />
        </View>
    );
}
