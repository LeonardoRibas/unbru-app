import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import React from "react";
import { View } from "react-native";
import Icon from "./Icon";
import styles from "./styles";

export default function BottomTab({
    state,
    navigation,
}: MaterialTopTabBarProps): React.ReactElement {
    return (
        <View style={styles.container}>
            <Icon
                type="breakfast"
                selected={state.index === 0}
                onPress={() => navigation.navigate("Desjejum")}
            />
            <Icon
                onPress={() => navigation.navigate("Almoço")}
                type="lunch"
                selected={state.index === 1}
            />
            <Icon
                onPress={() => navigation.navigate("Jantar")}
                type="dinner"
                selected={state.index === 2}
            />
        </View>
    );
}
