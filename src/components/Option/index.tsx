import React from "react";
import { Pressable, View, Text } from "react-native";
import { Colors } from "../../styles";
import styles from "./styles";

type OptionProps = {
    titleIcon: React.ReactElement;
    title: string;
    subTitle: string;
    actionIcon: React.ReactElement;
    onPress: () => void;
};

export default function Option({
    titleIcon,
    title,
    subTitle,
    actionIcon,
    onPress,
}: OptionProps): React.ReactElement {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}
            android_ripple={{ color: Colors.neutral.s200, radius: 300 }}
        >
            <View style={styles.infoWrapper}>
                {titleIcon}
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.subTitleText}>{subTitle}</Text>
                </View>
            </View>
            {actionIcon}
        </Pressable>
    );
}
