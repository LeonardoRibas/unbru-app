import styles from "./styles";
import { Text } from "react-native";
import Modal from "react-native-modal";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { IconButton, Icon } from "native-base";
import CalendarPicker from "../CalendarPicker";
import { getFormatedDate } from "../../utils/date";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DayIndexContext } from "../../context/DayIndexContext";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export default function Header({ navigation }: NativeStackHeaderProps): React.ReactElement {
    const { menu, dayIndex } = useContext(DayIndexContext);
    const [showModal, setShowModal] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" translucent={true} />
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
            <Modal
                isVisible={showModal}
                onBackdropPress={() => setShowModal(false)}
                onSwipeComplete={() => setShowModal(false)}
                swipeDirection="down"
                hideModalContentWhileAnimating
                useNativeDriverForBackdrop
                statusBarTranslucent
                scrollHorizontal
                propagateSwipe
                style={{ justifyContent: "flex-end", margin: 0 }}
            >
                <CalendarPicker />
            </Modal>
        </SafeAreaView>
    );
}
