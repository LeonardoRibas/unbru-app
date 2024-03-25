import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { getIconByLabel } from "../../utils/metadata";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import { Theme } from "@modules/common/styles";

type DishItemProps = {
    label: string;
    dish: string;
};

export default function DishItem({ label, dish }: DishItemProps): React.ReactElement {
    const emoji = getIconByLabel(label);
    const theme = useAppSelector((state) => state.theme);

    return (
        <View style={styles.container}>
            {emoji}
            <View style={styles.infoContainer}>
                <Text style={[styles.label, { color: Theme[theme].text_secondary }]}>{label}</Text>
                <Text style={[styles.dish, { color: Theme[theme].text_primary }]}>{dish}</Text>
            </View>
        </View>
    );
}
