import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import styles from "./styles";
import Button from "@modules/common/components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CampusRadioItem from "@modules/common/components/CampusRadioItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import { Theme } from "@modules/common/styles";

type CampusPickerModalNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    "CampusPickerModal"
>;

export default function CampusPickerModal({
    navigation,
}: CampusPickerModalNavigationProp): React.ReactElement {
    const insets = useSafeAreaInsets();
    const theme = useAppSelector((state) => state.theme);

    return (
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Pressable
                style={[StyleSheet.absoluteFill, { backgroundColor: "rgba(0,0,0,0.5)" }]}
                onPress={() => navigation.goBack()}
            />
            <View
                style={{
                    ...styles.container,
                    paddingBottom: insets.bottom,
                }}
            >
                <View
                    style={[styles.wrapper, { backgroundColor: Theme[theme].background_default }]}
                >
                    <View
                        style={[styles.handle, { backgroundColor: Theme[theme].text_secondary }]}
                    />
                    <CampusRadioItem title="Darcy Ribeiro" />
                    <CampusRadioItem title="Ceilândia" />
                    <CampusRadioItem title="Gama" />
                    <CampusRadioItem title="Planaltina" />
                    <CampusRadioItem title="Fazenda" />
                    <View style={styles.buttonContainer}>
                        <Button text="Confirmar" onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </View>
        </View>
    );
}
