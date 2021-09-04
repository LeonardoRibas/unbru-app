import Feather from "@expo/vector-icons/build/Feather";
import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

type SubHeaderProps = {
    mealType: string;
    time: string;
};

export default function SubHeader({ mealType, time }: SubHeaderProps): React.ReactElement {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{mealType}</Text>
            <View style={styles.hourInfoWrapper}>
                <Feather name="clock" size={13} color="#969696" iconStyle={styles.icon} />
                <Text style={styles.hourInfoText}>{time}</Text>
            </View>
        </View>
    );
}
