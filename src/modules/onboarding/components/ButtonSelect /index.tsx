import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import type { NavigationProp } from "@react-navigation/native";

type ButtonSelectProps = {
    leftIcon: JSX.Element;
    label: string;
    title: string;
    rightIcon: JSX.Element;
};

type ButtonSelectNavigationProp = NavigationProp<RootStackParamList>;

const ButtonSelect = ({
    leftIcon,
    label,
    title,
    rightIcon,
}: ButtonSelectProps): React.ReactElement => {
    const navigation = useNavigation<ButtonSelectNavigationProp>();

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
