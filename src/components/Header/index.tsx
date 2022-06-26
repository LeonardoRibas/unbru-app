import React, { useContext, useState } from "react";
import styles from "./styles";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import ModalBottomSheet from "../../components/ModalBottomSheet";
import WeekCalendarStrip from "../../components/WeekCalendarStrip";
import { getFormatedDate } from "../../utils/date";
import { DayIndexContext } from "../../context/DayIndexContext";
import { IconButton, Icon } from "native-base";

export default function Header({ navigation }: NativeStackHeaderProps): React.ReactElement {
    const { menu, dayIndex } = useContext(DayIndexContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <IconButton
                borderRadius="full"
                onPress={() => navigation.navigate("Settings")}
                icon={<Icon as={Feather} name="settings" size={6} color="white" />}
            />
            {menu && <Text style={styles.title}>{getFormatedDate(dayIndex)}</Text>}
            <IconButton
                borderRadius="full"
                onPress={() => setShowModal(true)}
                icon={<Icon as={Feather} name="calendar" size={6} color="white" />}
            />
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
