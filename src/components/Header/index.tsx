import styles from "./styles";
import { Colors } from "../../styles";
import React from "react";
import useAppSelector from "src/hooks/useAppSelector";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { getFormatedDate } from "../../utils/date";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";

export default function Header({ navigation }: NativeStackHeaderProps): React.ReactElement {
    const insets = useSafeAreaInsets();

    const dayIndex = useAppSelector((state) => state.dayIndex);
    const menu = useAppSelector((state) => state.menu);

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
                    onPress={() => navigation.navigate("CalendarPickerModal")}
                >
                    <Feather name="calendar" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
