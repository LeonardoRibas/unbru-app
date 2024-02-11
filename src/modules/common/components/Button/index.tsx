import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

type ButtonProps = TouchableOpacityProps & {
    text: string;
};

export default function Button({ text, onPress }: ButtonProps): React.ReactElement {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}
