import { View, Text, Platform } from "react-native";
import React from "react";
import styles from "./styles";
import Test from "assets/icons/fluent-emoji-flat_fork-and-knife-with-plate.svg";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import { Theme } from "src/styles";

const EmptyState = (): React.ReactElement => {
    const theme = useAppSelector((state) => state.theme);

    return (
        <View style={[styles.container, { backgroundColor: Theme[theme].background_default }]}>
            {Platform.OS === "web" ? <img src={Test}></img> : <Test width={150} height={150} />}
            <Text style={[styles.title, { color: Theme[theme].text_secondary }]}>
                Cardápio Indisponível
            </Text>
        </View>
    );
};

export default EmptyState;
