import React from "react";
import styles from "./styles";
import { Colors, Theme } from "../../styles";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/core";
import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useAppSelector from "src/hooks/useAppSelector";

type StackHeaderProps = {
    title: string;
};

export default function StackHeader({ title }: StackHeaderProps): React.ReactElement {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const theme = useAppSelector((state) => state.theme);

    return (
        <View style={{ paddingTop: insets.top, backgroundColor: Theme[theme].background_default }}>
            <StatusBar
                style={theme === "light" ? "dark" : "light"}
                backgroundColor={Theme[theme].background_default}
            />
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.goBack()}
                >
                    <Entypo name="chevron-left" size={24} color={Theme[theme].text_primary} />
                </TouchableOpacity>
                <Text style={[styles.title, { color: Theme[theme].text_primary }]}>{title}</Text>
            </View>
        </View>
    );
}
