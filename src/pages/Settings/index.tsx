import { View, Text, Switch } from "react-native";
import { BaseButton, BaseButtonProps } from "react-native-gesture-handler";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Typography } from "../../styles";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

type SettingsButtonProps = BaseButtonProps & {
    title: string;
    text: string;
    children: React.ReactChild;
    type?: "chevron" | "switch";
};

function SettingsButton({ title, text, onPress, children, type, ...props }: SettingsButtonProps) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return type == "chevron" ? (
        <BaseButton
            {...props}
            onPress={onPress}
            style={{
                width: "100%",
                height: 48,
                justifyContent: "center",
                marginVertical: 16,
            }}
        >
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                <View style={{ paddingEnd: 24 }}>{children}</View>
                <View>
                    <Text
                        style={{
                            fontFamily: Typography.fontWeight.semiBold,
                            fontSize: Typography.fontSize.x20,
                            paddingVertical: 3,
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            fontFamily: Typography.fontWeight.medium,
                            fontSize: Typography.fontSize.x10,
                            color: Colors.neutral.s500,
                            paddingVertical: 3,
                        }}
                    >
                        {text}
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Entypo
                        style={{ alignSelf: "flex-end" }}
                        name="chevron-small-right"
                        size={32}
                        color={Colors.primary.brand}
                    />
                </View>
            </View>
        </BaseButton>
    ) : (
        <View
            style={{
                width: "100%",
                height: 48,
                justifyContent: "center",
                marginVertical: 16,
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <View style={{ paddingEnd: 24 }}>{children}</View>
                <View>
                    <Text
                        style={{
                            fontFamily: Typography.fontWeight.semiBold,
                            fontSize: Typography.fontSize.x20,
                            paddingVertical: 3,
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            fontFamily: Typography.fontWeight.medium,
                            fontSize: Typography.fontSize.x10,
                            color: Colors.neutral.s500,
                            paddingVertical: 3,
                        }}
                    >
                        {text}
                    </Text>
                </View>

                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#d4eeda" }}
                        thumbColor={isEnabled ? Colors.primary.brand : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </View>
    );
}

export default function Settings(): React.ReactElement {
    return (
        <SafeAreaView
            style={{ backgroundColor: Colors.neutral.white, flex: 1, paddingHorizontal: 24 }}
        >
            <SettingsButton type="chevron" title="Campus: Darcy Ribeiro" text="Troque o campus">
                <FontAwesome name="graduation-cap" size={24} color="black" />
            </SettingsButton>
            <SettingsButton title="Modo escuro" text="Alterne entre modo claro e escuro">
                <FontAwesome name="moon-o" size={24} color="black" />
            </SettingsButton>
            <SettingsButton title="Modo vegetariano" text="Dê prioridade a pratos vegetarianos">
                <Ionicons name="ios-bug-outline" size={24} color="black" />
            </SettingsButton>
            <SettingsButton title="Notificações" text="Receba notificações do app">
                <FontAwesome name="bell-o" size={24} color="black" />
            </SettingsButton>
            <SettingsButton type="chevron" title="Sobre" text="Saiba mais sobre o app">
                <MaterialCommunityIcons name="information-outline" size={24} color="black" />
            </SettingsButton>
        </SafeAreaView>
    );
}
