import React from "react";
import styles from "./styles";
import { View, Text, Platform } from "react-native";
import { getIconByLabel } from "@modules/menu/utils/metadata";
import { Theme } from "src/styles";
import useAppSelector from "@modules/common/hooks/useAppSelector";

type MainDishItemProps = {
    label: string;
    dish: string;
};

export default function MainDishItem({ label, dish }: MainDishItemProps): JSX.Element {
    const emoji = getIconByLabel(label, 24);
    const theme = useAppSelector((state) => state.theme);

    return (
        <View
            style={[
                styles.container,
                Platform.OS === "web"
                    ? { backgroundColor: Theme[theme].background_card }
                    : {
                          backgroundColor: Theme[theme].background_card,
                          shadowColor: theme === "light" ? "#000000" : "rgba(0, 0, 0, 0)",
                      },
            ]}
        >
            <View style={styles.labelContainer}>
                {emoji}
                <Text style={[styles.label, { color: Theme[theme].text_secondary }]}>{label}</Text>
            </View>
            <Text style={[styles.dish, { color: Theme[theme].text_primary }]}>{dish}</Text>
        </View>
    );
}
