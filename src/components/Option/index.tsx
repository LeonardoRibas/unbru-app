import React from "react";
import { Pressable, View, Text } from "react-native";
import { Colors } from "../../styles";
import styles from "./styles";
import { Switch } from "native-base";

type OptionProps = {
    titleIcon: React.ReactElement;
    title: string;
    subTitle: string;
    actionIcon: React.ReactElement;
    onPress: () => void;
    type?: "arrow" | "switch";
    switchValue?: boolean;
};

export default function Option({
    titleIcon,
    title,
    subTitle,
    actionIcon,
    onPress,
    type = "arrow",
    switchValue,
}: OptionProps): React.ReactElement {
    return (
        <Pressable
            style={styles.container}
            onPress={type === "arrow" ? onPress : () => null}
            android_ripple={{ color: Colors.neutral.s200, radius: 300 }}
        >
            <View style={styles.infoWrapper}>
                {titleIcon}
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.subTitleText}>{subTitle}</Text>
                </View>
            </View>
            {type === "arrow" ? (
                actionIcon
            ) : (
                <Switch
                    trackColor={{ false: "#767577", true: "#d4eeda" }}
                    thumbColor={switchValue ? Colors.primary.base : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={onPress}
                    value={switchValue}
                    style={{ flex: 1, justifyContent: "flex-end" }}
                />
            )}
        </Pressable>
    );
}
