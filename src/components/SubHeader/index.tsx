import styles from "./styles";
import { Colors } from "src/styles";
import { Platform } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/build/Feather";
import { View, Text, TouchableOpacity } from "react-native";

type SubHeaderProps = {
    mealType: string;
    time: string;
    onShareClick?: () => void;
};

export default function SubHeader({
    mealType,
    time,
    onShareClick,
}: SubHeaderProps): React.ReactElement {
    return (
        <View style={styles.container}>
            <View style={styles.hourInfoWrapper}>
                <Feather name="clock" size={15} color={Colors.neutral.s600} />
                <Text style={styles.hourInfoText}>{time}</Text>
            </View>
            <Text style={styles.title}>{mealType}</Text>
            {Platform.OS !== "web" && (
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={onShareClick ? () => onShareClick() : undefined}
                >
                    <Feather name="share" size={24} color={Colors.neutral.s900} />
                </TouchableOpacity>
            )}
        </View>
    );
}
