import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { getIconByLabel } from "../../utils/metadata";

type DishItemProps = {
    label: string;
    dish: string;
};

export default function DishItem({ label, dish }: DishItemProps): React.ReactElement {
    const emoji = getIconByLabel(label);

    return (
        <View style={styles.container}>
            {emoji}
            <View style={styles.infoContainer}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.dish}>{dish}</Text>
            </View>
        </View>
    );
}
