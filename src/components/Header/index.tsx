import React, { useContext, useState } from "react";
import styles from "./styles";
import { Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import ModalBottomSheet from "../../components/ModalBottomSheet";
import WeekCalendarStrip from "../../components/WeekCalendarStrip";
import { getFormatedDate } from "../../utils/date";
import { DayIndexContext } from "../../context/DayIndexContext";

export default function Header({ navigation }: NativeStackHeaderProps): React.ReactElement {
    const { menu, dayIndex } = useContext(DayIndexContext);
    const [showModal, setShowModal] = useState(false);

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
            {menu && <Text style={styles.title}>{getFormatedDate(menu[dayIndex].date)}</Text>}
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
                <WeekCalendarStrip />
            </ModalBottomSheet>
        </SafeAreaView>
    );
}
