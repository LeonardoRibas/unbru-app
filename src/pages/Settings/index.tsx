import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BellIcon from "../../../assets/icons/bell.svg";
import InfoIcon from "../../../assets/icons/info.svg";
import MoonIcon from "../../../assets/icons/moon.svg";
import PlantIcon from "../../../assets/icons/plant.svg";
import SchoolIcon from "../../../assets/icons/school.svg";
import { Colors } from "../../styles";
import styles from "./styles";

type SettingsSectionProps = {
    title: string;
    text: string;
    children: React.ReactChild;
    onPress?: () => void;
};

function ChevronSection({ title, text, onPress, children, ...props }: SettingsSectionProps) {
    return (
        <Pressable
            android_ripple={{ color: Colors.neutral.s250, radius: 300 }}
            {...props}
            onPress={onPress}
            style={styles.baseButton}
        >
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
        </Pressable>
    );
}

function SwitchSection({ title, text, children }: SettingsSectionProps) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <Pressable
            android_ripple={{ color: Colors.neutral.s250, radius: 300 }}
            style={styles.baseButton}
            onPress={toggleSwitch}
        >
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
        </Pressable>
    );
}

export default function Settings(): React.ReactElement {
    const color = Colors.neutral.black;
    return (
        <SafeAreaView style={styles.container}>
            <ChevronSection title="Campus: Darcy Ribeiro" text="Troque o campus">
                <SchoolIcon stroke={color} />
            </ChevronSection>
            <SwitchSection title="Modo escuro" text="Alterne entre modo claro e escuro">
                <MoonIcon stroke={color} />
            </SwitchSection>
            <SwitchSection title="Modo vegetariano" text="Dê prioridade a pratos vegetarianos">
                <PlantIcon stroke={color} />
            </SwitchSection>
            <SwitchSection title="Notificações" text="Receba notificações do app">
                <BellIcon stroke={color} />
            </SwitchSection>
            <ChevronSection title="Sobre" text="Saiba mais sobre o app">
                <InfoIcon stroke={color} />
            </ChevronSection>
        </SafeAreaView>
    );
}
