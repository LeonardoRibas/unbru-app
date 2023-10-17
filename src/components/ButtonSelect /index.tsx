import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

type ButtonSelectProps = {
    leftIcon: JSX.Element;
    label: string;
    title: string;
    rightIcon: JSX.Element;
};

const ButtonSelect = ({
    leftIcon,
    label,
    title,
    rightIcon,
}: ButtonSelectProps): React.ReactElement => {
    const navigation = useNavigation();

    return (
        <Pressable
            style={styles.container}
            onPress={() => navigation.navigate("CampusPickerModal")}
        >
            <View style={styles.infoWrapper}>
                {leftIcon}
                <View style={styles.textWrapper}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
            {rightIcon}
        </Pressable>
    );
};

export default ButtonSelect;
