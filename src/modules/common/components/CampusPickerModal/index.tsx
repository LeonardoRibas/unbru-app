import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Button from "@modules/common/components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CampusRadioItem from "@modules/common/components/CampusRadioItem";
import Modal from "react-native-modal";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useAppSelector from "src/hooks/useAppSelector";
import { Theme } from "src/styles";

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
        </Modal>
    );
}
