import React from "react";
import styles from "./styles";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "@modules/common/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingIllustration from "assets/illustrations/OnBoardingIllustration";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import ButtonSelect from "@modules/onboarding/components/ButtonSelect";
import MaterialIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/build/Feather";
import { Colors } from "@modules/common/styles";

type OnBoardingProps = NativeStackScreenProps<RootStackParamList, "OnBoarding">;

export default function OnBoarding({ navigation }: OnBoardingProps): React.ReactElement {
    const campus = useAppSelector((state) => state.campus);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <OnboardingIllustration />
            <View style={styles.textContent}>
                <Text style={styles.title}>
                    Saiba tudo sobre as refeições na <Text style={styles.highlight}>UnB</Text>
                </Text>
                <Text style={styles.subTitle}>
                    O cardápio do Restaurante Universitário da Universidade de Brasília na palma de
                    sua mão!
                </Text>
            </View>
            <View style={styles.actionContent}>
                <Text style={styles.actionLabel}>Para começar, escolha seu campus</Text>
                <ButtonSelect
                    leftIcon={
                        <MaterialIcons
                            name="school-outline"
                            size={24}
                            color={Colors.primary.base}
                        />
                    }
                    label="Campus selecionado"
                    title={campus}
                    rightIcon={
                        <Feather name="chevron-down" size={24} color={Colors.primary.base} />
                    }
                />
                <Button text="Ver Cardápio" onPress={() => navigation.navigate("Menu")} />
            </View>
        </SafeAreaView>
    );
}
