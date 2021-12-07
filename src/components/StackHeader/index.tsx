import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

type StackHeaderProps = {
    title: string;
};

export default function StackHeader({ title }: StackHeaderProps): React.ReactElement {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <BorderlessButton style={styles.icon} onPress={() => navigation.goBack()}>
                <Entypo name="chevron-small-left" size={32} color="black" />
            </BorderlessButton>
            <Text style={styles.title}>{title}</Text>
        </SafeAreaView>
    );
}
