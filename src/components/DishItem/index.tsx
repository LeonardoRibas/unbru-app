import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";

type DishItemProps = {
    label: string;
    dish: string;
};

export default function DishItem({ label, dish }: DishItemProps): React.ReactElement {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.dish}>{dish}</Text>
        </View>
    );
}
