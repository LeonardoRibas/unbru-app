import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Test from "assets/icons/fluent-emoji-flat_fork-and-knife-with-plate.svg";

const EmptyState = (): React.ReactElement => {
    return (
        <View style={styles.container}>
            <img src={Test}></img>
            <Text style={styles.title}>Cardápio Indisponível</Text>
        </View>
    );
};

export default EmptyState;
