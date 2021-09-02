import React from "react";
import styles from "./styles";
import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

type HeaderProps = MaterialTopTabBarProps & {
    title: string;
};

export default function Header({ state, navigation, title }: HeaderProps): React.ReactElement {
    return (
        <SafeAreaView style={styles.container}>
            <RectButton
                style={styles.buttonWrapper}
                onPress={() =>
                    navigation.navigate(
                        state.routeNames[state.index - 1 >= 0 ? state.index - 1 : 0]
                    )
                }
            >
                <MaterialIcons name="keyboard-arrow-left" size={24} color="#7E7E7E" />
                <Text style={styles.buttonTextLeft}>Ontem</Text>
            </RectButton>
            <Text style={styles.title}>{title}</Text>
            <RectButton
                style={styles.buttonWrapper}
                onPress={() =>
                    navigation.navigate(
                        state.routeNames[
                            state.index + 1 <= state.routeNames.length - 1
                                ? state.index + 1
                                : state.routeNames.length - 1
                        ]
                    )
                }
            >
                <Text style={styles.buttonTextRight}>Amanhã</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#7E7E7E" />
            </RectButton>
        </SafeAreaView>
    );
}
