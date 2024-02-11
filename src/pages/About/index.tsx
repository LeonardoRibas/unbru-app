import React from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity, Linking, Platform } from "react-native";
import AboutIllustration from "assets/illustrations/AboutIllustration";
import ActionInput from "src/components/ActionInput";
import Button from "@modules/common/components/Button";
import useAppSelector from "src/hooks/useAppSelector";
import { Theme } from "src/styles";
import { Feather } from "@expo/vector-icons";
import HeartEmoji from "assets/icons/fluent-emoji_heart-suit.svg";
import * as Clipboard from "expo-clipboard";

const About = (): React.ReactElement => {
    const theme = useAppSelector((state) => state.theme);

    const openURL = (url: string) => {
        Linking.openURL(url).catch((err) => console.error("An error occurred", err));
    };

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync("leoribas@unbru.info");
    };

    return (
        <View style={[styles.container, { backgroundColor: Theme[theme].background_default }]}>
            <View style={styles.illustrationContainer}>
                <AboutIllustration />
            </View>
            <Text style={[styles.title, { color: Theme[theme].text_primary }]}>
                Ajude o <Text style={styles.textHighlight}>UnBRU!</Text>
            </Text>
            <Text style={[styles.description, { color: Theme[theme].text_default }]}>
                O aplicativo do UnBRU é mantido de forma independente e totalmente gratuita!
                Contribua com o projeto para continuarmos melhorando o app cada vez mais!
            </Text>
            <View style={{ alignItems: "center", width: "100%", gap: 24, marginBottom: 16 }}>
                <ActionInput
                    label="Chave pix"
                    inputText="leoribas@unbru.info"
                    actionIcon={<Feather name="copy" size={24} color={Theme[theme].text_button} />}
                    onPress={copyToClipboard}
                />
                <Button text="Copiar chave Pix" />
            </View>
            <TouchableOpacity
                style={styles.linkContainer}
                onPress={() => openURL("https://github.com/LeonardoRibas/unbru-app")}
            >
                <Text style={[styles.link, { color: Theme[theme].text_default }]}>
                    É dev? Contribua com o projeto no{" "}
                    <Text style={styles.textUnderscored}>GitHub!</Text>
                </Text>
            </TouchableOpacity>
            <View style={{ position: "absolute", flexDirection: "row", bottom: 16, gap: 4 }}>
                <Text style={[styles.footerText, { color: Theme[theme].text_secondary }]}>
                    Feito com
                </Text>
                {Platform.OS === "web" ? <img src={HeartEmoji} /> : <HeartEmoji />}
                <Text style={[styles.footerText, { color: Theme[theme].text_secondary }]}>
                    por Leo Ribas
                </Text>
            </View>
        </View>
    );
};

export default About;
