import styles from "./styles";
import { Colors } from "../../styles";
import Modal from "react-native-modal";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { IconButton, Icon } from "native-base";
import CalendarPicker from "../CalendarPicker";
import { getFormatedDate } from "../../utils/date";
import { GeneralContext } from "../../context/GeneralContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { selectDayIndex } from "../../redux/features/dayIndexSlice";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export default function Header({ navigation }: NativeStackHeaderProps): React.ReactElement {
    const insets = useSafeAreaInsets();
    const dayIndex = useSelector(selectDayIndex);
    const { isCalendarModalOpen, setIsCalendarModalOpen } = useContext(GeneralContext);
    const menu = useSelector((state) => state.menu.value);

    return (
        <View style={{ paddingTop: insets.top, backgroundColor: Colors.primary.base }}>
            <View style={styles.container}>
                <StatusBar style="light" backgroundColor={Colors.primary.base} />
                <IconButton
                    borderRadius="full"
                    onPress={() => navigation.navigate("Settings")}
                    icon={<Icon as={Feather} name="settings" size={6} color="white" />}
                />
                {menu && <Text style={styles.title}>{getFormatedDate(dayIndex)}</Text>}
                <IconButton
                    borderRadius="full"
                    onPress={() => setIsCalendarModalOpen(true)}
                    icon={<Icon as={Feather} name="calendar" size={6} color="white" />}
                />
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
