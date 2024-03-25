import { View, Text, Platform, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import { Theme } from "@modules/common/styles";

type ActionInputProps = {
    label: string;
    inputText: string;
    icon?: React.ReactNode;
    actionIcon: React.ReactNode;
    onPress: () => void;
};

const ActionInput = ({
    label,
    inputText,
    icon,
    actionIcon,
    onPress,
}: ActionInputProps): React.ReactElement => {
    const theme = useAppSelector((state) => state.theme);

    return (
        <View style={styles.container}>
            <Text style={[styles.label, { color: Theme[theme].text_default }]}>{label}</Text>
            <TouchableOpacity
                onPress={onPress}
                style={[
                    styles.inputContainer,
                    Platform.OS === "web"
                        ? { backgroundColor: Theme[theme].background_card }
                        : {
                              backgroundColor: Theme[theme].background_card,
                              shadowColor: theme === "light" ? "#000000" : "rgba(0, 0, 0, 0)",
                          },
                ]}
            >
                <View style={styles.inputContent}>
                    {icon}
                    <Text style={[styles.inputText, { color: Theme[theme].text_primary }]}>
                        {inputText}
                    </Text>
                </View>
                <View style={styles.actionIconContainer}>{actionIcon}</View>
            </TouchableOpacity>
        </View>
    );
};

export default ActionInput;
