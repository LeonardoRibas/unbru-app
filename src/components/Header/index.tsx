import React, { useState } from "react";
import styles from "./styles";
import { Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { getHeaderTitle } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import ModalBottomSheet from "../../components/ModalBottomSheet";
import WeekCalendarStrip from "../../components/WeekCalendarStrip";

export default function Header({
    route,
    options,
    navigation,
}: NativeStackHeaderProps): React.ReactElement {
    const title = getHeaderTitle(options, route.name);
    const [showModal, setShowModal] = useState(false);
    const date = new Date();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <TouchableOpacity style={styles.icon}>
                <Feather
                    name="settings"
                    color="white"
                    size={22}
                    onPress={() => navigation.navigate("Settings")}
                />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.icon}>
                <Feather
                    name="calendar"
                    color="white"
                    size={22}
                    onPress={() => setShowModal(true)}
                />
            </TouchableOpacity>
            <ModalBottomSheet
                statusBarTranslucent
                animationType="fade"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}
            >
                <WeekCalendarStrip date={date} />
            </ModalBottomSheet>
        </SafeAreaView>
    );
}
