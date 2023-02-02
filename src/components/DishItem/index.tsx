import React from "react";
import styles from "./styles";
import { View, Text, Image } from "react-native";
import { getMetadata } from "../../utils/metadata";

type DishItemProps = {
    label: string;
    dish: string;
};

export default function DishItem({ label, dish }: DishItemProps): React.ReactElement {
    const { emoji } = getMetadata(label);
    return (
        <View style={styles.container}>
            <Image style={styles.emoji} source={emoji} />
            <View style={styles.content}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.dish}>{dish}</Text>
            </View>
        </View>
    );
}
