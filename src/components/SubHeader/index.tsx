import React from "react";
import { View, Text } from "react-native";
import Tag from "../Tag";
import styles from "./styles";

type SubHeaderProps = {
    mealType: string;
    campus: string;
    time: string;
};

export default function SubHeader({ mealType, campus, time }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{mealType}</Text>
            <Text style={styles.subTitle}>{time}</Text>
            <View style={styles.tagWrapper}>
                <Tag campus={campus} />
            </View>
        </View>
    );
}
