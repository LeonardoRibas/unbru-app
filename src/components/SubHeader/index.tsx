import Feather from "@expo/vector-icons/build/Feather";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Colors } from "../../styles";

type SubHeaderProps = {
    mealType: string;
    time: string;
};

export default function SubHeader({ mealType, time }: SubHeaderProps): React.ReactElement {
    return (
        <View style={styles.container}>
            <View style={styles.hourInfoWrapper}>
                <Feather name="clock" size={15} color="#969696" />
                <Text style={styles.hourInfoText}>{time}</Text>
            </View>
            <Text style={styles.title}>{mealType}</Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Feather name="share" size={24} color={Colors.neutral.s900} />
            </TouchableOpacity>
        </View>
    );
}
