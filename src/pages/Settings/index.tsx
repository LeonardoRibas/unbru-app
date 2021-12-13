import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import { BaseButton, BaseButtonProps } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import BellIcon from "../../../assets/icons/bell.svg";
import InfoIcon from "../../../assets/icons/info.svg";
import MoonIcon from "../../../assets/icons/moon.svg";
import PlantIcon from "../../../assets/icons/plant.svg";
import SchoolIcon from "../../../assets/icons/school.svg";
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
                </BaseButton>
            );
        case "switch":
            return (
                <BaseButton style={styles.baseButton} onPress={toggleSwitch}>
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
                </BaseButton>
            );
        default:
            return null;
    }
}

export default function Settings(): React.ReactElement {
    const color = Colors.neutral.black;
    return (
        <SafeAreaView style={styles.container}>
            <SettingsButton type="chevron" title="Campus: Darcy Ribeiro" text="Troque o campus">
                <SchoolIcon stroke={color} />
            </SettingsButton>
            <SettingsButton
                type="switch"
                title="Modo escuro"
                text="Alterne entre modo claro e escuro"
            >
                <MoonIcon stroke={color} />
            </SettingsButton>
            <SettingsButton
                type="switch"
                title="Modo vegetariano"
                text="Dê prioridade a pratos vegetarianos"
            >
                <PlantIcon stroke={color} />
            </SettingsButton>
            <SettingsButton type="switch" title="Notificações" text="Receba notificações do app">
                <BellIcon stroke={color} />
            </SettingsButton>
            <SettingsButton type="chevron" title="Sobre" text="Saiba mais sobre o app">
                <InfoIcon stroke={color} />
            </SettingsButton>
        </SafeAreaView>
    );
}
