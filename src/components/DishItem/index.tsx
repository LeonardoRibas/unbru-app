import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { getMeta } from "../../utils/emojis";

type DishItemProps = {
    label: string;
    dish: string;
};

export default function DishItem({ label, dish }: DishItemProps): React.ReactElement {
    const { emoji, color } = getMeta(label);
    return (
        <View style={styles.container}>
            <View
                style={[
                    styles.emojiContainer,
                    {
                        backgroundColor: color,
                    },
                ]}
            >
                <Text style={styles.emoji}>{emoji}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.dish}>{dish}</Text>
                <Text style={styles.label}>{label}</Text>
            </View>
        </View>
    );
}
