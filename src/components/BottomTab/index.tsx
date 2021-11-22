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
                index={state.index}
                onPress={() => navigation.navigate("Desjejum")}
            />
            <Icon onPress={() => navigation.navigate("Almoço")} type="lunch" index={state.index} />
            <Icon onPress={() => navigation.navigate("Jantar")} type="dinner" index={state.index} />
        </View>
    );
}
