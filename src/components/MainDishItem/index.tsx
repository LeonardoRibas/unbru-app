import React from "react";
import styles from "./styles";
import { View, Text, Image } from "react-native";
import { getMetadata } from "../../utils/metadata";

type MainDishItemProps = {
    label: string;
    dish: string;
};

export default function MainDishItem({ label, dish }: MainDishItemProps): JSX.Element {
    const { color, emoji } = getMetadata(label);

    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Image style={styles.emoji} source={emoji} />
                <Text style={styles.label}>{label}</Text>
            </View>
            <Text style={styles.dish}>{dish}</Text>
        </View>
    );
}
