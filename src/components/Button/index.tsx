import React from "react";
import { Text } from "react-native";
import { BaseButton, BaseButtonProps } from "react-native-gesture-handler";
import styles from "./styles";

type ButtonProps = BaseButtonProps & {
    text: string;
};

export default function Button({ text, onPress }: ButtonProps): React.ReactElement {
    return (
        <BaseButton style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </BaseButton>
    );
}
