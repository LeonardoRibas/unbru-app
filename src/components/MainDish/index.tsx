import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { getMeta } from "../../utils/emojis";

type MainDishProps = {
    label: string;
    dish: string;
};

export default function MainDish({ label, dish }: MainDishProps): JSX.Element {
    const { color, emoji } = getMeta(label);
    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: color,
                },
            ]}
        >
            <View style={styles.emojiContainer}>
                <Text style={styles.emoji}>{emoji}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.dish}>{dish}</Text>
                <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    );
}
