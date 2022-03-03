import React from "react";
import styles from "./styles";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import OnboardingIllustration from "../../components/OnboardingIllustration";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type OnBoardingProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "OnBoarding">;
};

export default function OnBoarding({ navigation }: OnBoardingProps): React.ReactElement {
    return (
        <SafeAreaView style={styles.container}>
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
            <Button text="Ver Cardápio" onPress={() => navigation.navigate("Home")} />
        </SafeAreaView>
    );
}
