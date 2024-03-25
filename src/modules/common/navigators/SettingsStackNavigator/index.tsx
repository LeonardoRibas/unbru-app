import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "@modules/settings/components/About";
import StackHeader from "@modules/settings/components/StackHeader";
import A2HSTutorialIOS from "@modules/settings/components/A2HSTutorial";
import SettingsMenu from "@modules/settings/components/SettingsMenu";

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export default function SettingsStackNavigator(): React.ReactElement {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SettingsMenu"
                component={SettingsMenu}
                options={{
                    title: "Configurações",
                    header: () => <StackHeader title="Configurações" />,
                }}
            />
            <Stack.Screen
                name="About"
                component={About}
                options={{ title: "Sobre", header: () => <StackHeader title="Ajude o App" /> }}
            />
            <Stack.Screen
                name="A2HSTutorial"
                component={A2HSTutorialIOS}
                options={{
                    title: "Adicionar à tela inicial",
                    header: () => <StackHeader title="Adicionar à tela inicial" />,
                }}
            />
        </Stack.Navigator>
    );
}
