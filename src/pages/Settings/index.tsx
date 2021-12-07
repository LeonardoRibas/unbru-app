import { Entypo, FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import { BaseButton, BaseButtonProps } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../styles";
import styles from "./styles";

type SettingsButtonProps = BaseButtonProps & {
    title: string;
    text: string;
    children: React.ReactChild;
    type?: "chevron" | "switch";
};

function SettingsButton({ title, text, onPress, children, type, ...props }: SettingsButtonProps) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    switch (type) {
        case "chevron":
            return (
                <BaseButton {...props} onPress={onPress} style={styles.baseButton}>
                    <View style={styles.buttonView}>
                        <View style={styles.iconView}>{children}</View>
                        <View>
                            <Text style={styles.tittle}>{title}</Text>
                            <Text style={styles.text}>{text}</Text>
                        </View>
                        <Entypo
                            style={{ marginLeft: "auto" }}
                            name="chevron-small-right"
                            size={32}
                            color={Colors.primary.brand}
                        />
                    </View>
                </BaseButton>
            );
        case "switch":
            return (
                <View style={styles.baseButton}>
                    <View style={styles.buttonView}>
                        <View style={styles.iconView}>{children}</View>
                        <View>
                            <Text style={styles.tittle}>{title}</Text>
                            <Text style={styles.text}>{text}</Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#d4eeda" }}
                            thumbColor={isEnabled ? Colors.primary.brand : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{ flex: 1, justifyContent: "flex-end" }}
                        />
                    </View>
                </View>
            );
        default:
            return null;
    }
}

export default function Settings(): React.ReactElement {
    return (
        <SafeAreaView style={styles.container}>
            <SettingsButton type="chevron" title="Campus: Darcy Ribeiro" text="Troque o campus">
                <FontAwesome name="graduation-cap" size={24} color="black" />
            </SettingsButton>
            <SettingsButton
                type="switch"
                title="Modo escuro"
                text="Alterne entre modo claro e escuro"
            >
                <FontAwesome name="moon-o" size={24} color="black" />
            </SettingsButton>
            <SettingsButton
                type="switch"
                title="Modo vegetariano"
                text="Dê prioridade a pratos vegetarianos"
            >
                <Ionicons name="ios-bug-outline" size={24} color="black" />
            </SettingsButton>
            <SettingsButton type="switch" title="Notificações" text="Receba notificações do app">
                <FontAwesome name="bell-o" size={24} color="black" />
            </SettingsButton>
            <SettingsButton type="chevron" title="Sobre" text="Saiba mais sobre o app">
                <MaterialCommunityIcons name="information-outline" size={24} color="black" />
            </SettingsButton>
        </SafeAreaView>
    );
}
