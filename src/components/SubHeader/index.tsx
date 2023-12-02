import styles from "./styles";
import { Theme } from "src/styles";
import { Platform } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/build/Feather";
import { View, Text, TouchableOpacity } from "react-native";
import useAppSelector from "src/hooks/useAppSelector";

type SubHeaderProps = {
    mealType: string;
    time: string;
    onShareClick?: () => void;
};

export default function SubHeader({
    mealType,
    time,
    onShareClick,
}: SubHeaderProps): React.ReactElement {
    const theme = useAppSelector((state) => state.theme);

    return (
        <View style={[styles.container, { backgroundColor: Theme[theme].background_default }]}>
            <View style={styles.hourInfoWrapper}>
                <Feather name="clock" size={15} color={Theme[theme].text_secondary} />
                <Text style={[styles.hourInfoText, { color: Theme[theme].text_secondary }]}>
                    {time}
                </Text>
            </View>
            <Text style={[styles.title, { color: Theme[theme].text_primary }]}>{mealType}</Text>
            {Platform.OS !== "web" && (
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={onShareClick ? () => onShareClick() : undefined}
                >
                    <Feather name="share" size={24} color={Theme[theme].text_primary} />
                </TouchableOpacity>
            )}
        </View>
    );
}
