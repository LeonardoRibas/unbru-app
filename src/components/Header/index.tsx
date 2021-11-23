import React from "react";
import styles from "./styles";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { BorderlessButton } from "react-native-gesture-handler";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

type HeaderProps = MaterialTopTabBarProps & {
    title: string;
};

export default function Header({ title }: HeaderProps): React.ReactElement {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <BorderlessButton style={styles.icon}>
                <Feather name="settings" color="white" size={22} />
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
            <BorderlessButton style={styles.icon}>
                <Feather name="calendar" color="white" size={22} />
            </BorderlessButton>
        </SafeAreaView>
    );
}
