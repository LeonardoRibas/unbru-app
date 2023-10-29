import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { getIconByLabel } from "../../utils/metadata";

type MainDishItemProps = {
    label: string;
    dish: string;
};

export default function MainDishItem({ label, dish }: MainDishItemProps): JSX.Element {
    const emoji = getIconByLabel(label, 24);

    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                {emoji}
                <Text style={styles.label}>{label}</Text>
            </View>
            <Text style={styles.dish}>{dish}</Text>
        </View>
    );
}
