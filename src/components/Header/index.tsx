import styles from "./styles";
import { Colors } from "../../styles";
import Modal from "react-native-modal";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import CalendarPicker from "../CalendarPicker";
import { getFormatedDate } from "../../utils/date";
import { Text, TouchableOpacity, View } from "react-native";
import { GeneralContext } from "../../context/GeneralContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export default function Header({ navigation }: NativeStackHeaderProps): React.ReactElement {
    const insets = useSafeAreaInsets();
    const dayIndex = useSelector((state) => state.dayIndex);
    const { isCalendarModalOpen, setIsCalendarModalOpen } = useContext(GeneralContext);
    const menu = useSelector((state) => state.menu);

    return (
        <View style={{ paddingTop: insets.top, backgroundColor: Colors.primary.base }}>
            <View style={styles.container}>
                <StatusBar style="light" backgroundColor={Colors.primary.base} />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate("Settings")}
                >
                    <Feather name="settings" size={24} color="white" />
                </TouchableOpacity>
                {menu && <Text style={styles.title}>{getFormatedDate(dayIndex)}</Text>}
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => setIsCalendarModalOpen(true)}
                >
                    <Feather name="calendar" size={24} color="white" />
                </TouchableOpacity>
                <Modal
                    isVisible={isCalendarModalOpen}
                    onBackdropPress={() => setIsCalendarModalOpen(false)}
                    onSwipeComplete={() => setIsCalendarModalOpen(false)}
                    swipeDirection="down"
                    hideModalContentWhileAnimating
                    useNativeDriverForBackdrop
                    statusBarTranslucent
                    scrollHorizontal
                    propagateSwipe
                    backdropOpacity={0.5}
                    style={{ justifyContent: "flex-end", margin: 0 }}
                >
                    <CalendarPicker />
                </Modal>
            </View>
        </View>
    );
}
