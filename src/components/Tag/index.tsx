import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TagProps = {
    campus: string;
};

export default function Tag({ campus }: TagProps) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="school-outline" size={24} color="white" />
            <Text style={styles.text}>{campus}</Text>
        </View>
    );
}
