import React from "react";
import styles from "./styles";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingIllustration } from "../../../assets/illustrations";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type OnBoardingProps = NativeStackScreenProps<RootStackParamList, "OnBoarding">;

export default function OnBoarding({ navigation }: OnBoardingProps): React.ReactElement {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='dark'/>
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
            <Button text="Ver Cardápio" onPress={() => navigation.navigate("Menu")} />
        </SafeAreaView>
    );
}
