import React, { useContext } from "react";
import styles from "./styles";
import Modal from "react-native-modal";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../../components/Button";
import CampusPicker from "../../components/CampusPicker";
import { GeneralContext } from "../../context/GeneralContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingIllustration } from "../../../assets/illustrations";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type OnBoardingProps = NativeStackScreenProps<RootStackParamList, "OnBoarding">;

export default function OnBoarding({ navigation }: OnBoardingProps): React.ReactElement {
    const { isCampusSelectModalOpen, setIsCampusSelectModalOpen } = useContext(GeneralContext);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.content}>
                <OnboardingIllustration />
                <Text style={styles.title}>
                    Saiba tudo sobre as{"\n"}
                    refeições na <Text style={styles.highlight}>UnB</Text>
                </Text>
                <Text style={styles.subTitle}>
                    O cardápio do Restaurante{"\n"}
                    Universitário da Universidade de{"\n"}
                    Brasília na palma de sua mão!
                </Text>
            </View>
            <Button text="Selecione seu campus" onPress={() => setIsCampusSelectModalOpen(true)} />
            <Modal
                isVisible={isCampusSelectModalOpen}
                onBackdropPress={() => setIsCampusSelectModalOpen(false)}
                onSwipeComplete={() => setIsCampusSelectModalOpen(false)}
                swipeDirection="down"
                hideModalContentWhileAnimating
                useNativeDriverForBackdrop
                statusBarTranslucent
                scrollHorizontal
                propagateSwipe
                backdropOpacity={0.5}
                style={{ justifyContent: "flex-end", margin: 0 }}
            >
                <CampusPicker
                    onConfirm={() => {
                        setIsCampusSelectModalOpen(false);
                        navigation.navigate("Menu");
                    }}
                />
            </Modal>
        </SafeAreaView>
    );
}
