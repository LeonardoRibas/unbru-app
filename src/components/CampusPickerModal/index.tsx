import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Button from "../Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CampusRadioItem from "../CampusRadioItem";
import Modal from "react-native-modal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type CampusPickerModalNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    "CampusPickerModal"
>;

export default function CampusPickerModal({
    navigation,
}: CampusPickerModalNavigationProp): React.ReactElement {
    const insets = useSafeAreaInsets();

    return (
        <Modal
            isVisible={true}
            onBackdropPress={() => navigation.goBack()}
            onSwipeComplete={() => navigation.goBack()}
            swipeDirection="down"
            hideModalContentWhileAnimating
            useNativeDriverForBackdrop
            statusBarTranslucent
            scrollHorizontal
            propagateSwipe
            backdropOpacity={0.5}
            style={{ justifyContent: "flex-end", margin: 0 }}
        >
            <View
                style={{
                    ...styles.container,
                    paddingBottom: insets.bottom,
                }}
            >
                <View style={styles.wrapper}>
                    <View style={styles.handle} />
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
        </Modal>
    );
}
