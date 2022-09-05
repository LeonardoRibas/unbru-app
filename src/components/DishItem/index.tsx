import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { getEmoji } from "../../utils/emojis";

type DishItemProps = {
    label: string;
    dish: string;
};

export default function DishItem({ label, dish }: DishItemProps): React.ReactElement {
    const emoji = getEmoji(label);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                <Text style={styles.emoji}>{emoji} </Text>
        {label}
            </Text>
            <Text style={styles.dish}>{dish}</Text>
        </View>
    );
}
