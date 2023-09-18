import React from "react";
import styles from "./styles";
import { Colors } from "../../styles";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/core";
import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type StackHeaderProps = {
    title: string;
};

export default function StackHeader({ title }: StackHeaderProps): React.ReactElement {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    return (
        <View style={{ paddingTop: insets.top, backgroundColor: Colors.neutral.white }}>
            <StatusBar style="dark" backgroundColor="white" />
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.goBack()}
                >
                    <Entypo name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
}
