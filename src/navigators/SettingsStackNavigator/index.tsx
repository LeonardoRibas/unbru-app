import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../../pages/About";
import { View } from "react-native";
import Option from "../../components/Option";
import Feather from "@expo/vector-icons/build/Feather";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import StackHeader from "../../components/StackHeader";
import A2HSTutorial from "../../pages/A2HSTutorial";

type SettingsMenuProps = NativeStackScreenProps<SettingsStackParamList, "About">;

const Stack = createNativeStackNavigator();

const SettingsMenu = ({ navigation }: SettingsMenuProps) => (
    <View style={styles.container}>
        <Option
            titleIcon={<Feather name="info" size={24} />}
            title="Sobre"
            subTitle="Saiba mais sobre o app"
            actionIcon={<Feather name="chevron-right" size={24} />}
            onPress={() => navigation.navigate("About")}
        />
        <Option
            titleIcon={<Feather name="smartphone" size={24} />}
            title="Tela inicial"
            subTitle="Adicione o app à sua tela inicial"
            actionIcon={<Feather name="chevron-right" size={24} />}
            onPress={() => navigation.navigate("A2HSTutorial")}
        />
    </View>
);

export default function SettingsStackNavigator(): React.ReactElement {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Configurações"
                component={SettingsMenu}
                options={{
                    title: "Configurações",
                    header: () => <StackHeader title="Configurações" />,
                }}
            />
            <Stack.Screen
                name="About"
                component={About}
                options={{ title: "Sobre", header: () => <StackHeader title="Sobre" /> }}
            />
            <Stack.Screen
                name="A2HSTutorial"
                component={A2HSTutorial}
                options={{
                    title: "Adicionar à tela inicial",
                    header: () => <StackHeader title="Adicionar à tela inicial" />,
                }}
            />
        </Stack.Navigator>
    );
}
