import React from "react";
import dayjs from "dayjs";
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
    const yesterday = dayjs().subtract(1, "day").format("DD/MM");
    const today = dayjs().format("DD/MM");
    const tomorrow = dayjs().add(1, "day").format("DD/MM");

    return (
        <SafeAreaView style={styles.container}>
            {state.index - 1 >= 0 && (
                <RectButton
                    style={styles.buttonWrapper}
                    onPress={() =>
                        navigation.navigate(
                            state.routeNames[state.index - 1 >= 0 ? state.index - 1 : 0]
                        )
                    }
                >
                    <MaterialIcons name="keyboard-arrow-left" size={24} color="#7E7E7E" />
                    <Text style={styles.buttonTextLeft}>
                        {title === today
                            ? "Ontem"
                            : title === tomorrow
                            ? "Hoje"
                            : state.routeNames[state.index - 1]}
                    </Text>
                </RectButton>
            )}
            <Text style={styles.title}>
                {title === today
                    ? "Hoje"
                    : title === tomorrow
                    ? "Amanhã"
                    : title === yesterday
                    ? "Ontem"
                    : title}
            </Text>
            {state.index + 1 <= state.routeNames.length - 1 && (
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
                    <Text style={styles.buttonTextRight}>
                        {title === today
                            ? "Amanhã"
                            : title === yesterday
                            ? "Hoje"
                            : state.routeNames[state.index + 1]}
                    </Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="#7E7E7E" />
                </RectButton>
            )}
        </SafeAreaView>
    );
}
