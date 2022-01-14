import React from "react";
import styles from "./styles";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { getHeaderTitle } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { BorderlessButton } from "react-native-gesture-handler";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export default function Header({
    route,
    options,
    navigation,
}: NativeStackHeaderProps): React.ReactElement {
    const title = getHeaderTitle(options, route.name);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <BorderlessButton style={styles.icon} onPress={() => navigation.navigate("Settings")}>
                <Feather name="settings" color="white" size={22} />
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            <BorderlessButton style={styles.icon}>
                <Feather name="calendar" color="white" size={22} />
            </BorderlessButton>
        </SafeAreaView>
    );
}
