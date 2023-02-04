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
            <View style={[styles.emojiContainer, { backgroundColor: color }]}>
                <Image style={styles.emoji} source={emoji} />
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.dish}>{dish}</Text>
            </View>
        </View>
    );
}
