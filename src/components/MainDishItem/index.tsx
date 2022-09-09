import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { getMetadata } from "../../utils/metadata";

type MainDishItemProps = {
    label: string;
    dish: string;
};

export default function MainDishItem({ label, dish }: MainDishItemProps): JSX.Element {
    const { color, emoji } = getMetadata(label);

    return (
        <View style={styles.wrapper}>
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
        </View>
    );
}
