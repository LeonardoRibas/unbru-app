import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import styles from "./styles";
import { Sizing, Theme } from "src/styles";
import { Platform } from "react-native";
import useAppSelector from "@modules/common/hooks/useAppSelector";

const A2HSTutorialIOS = (): React.ReactElement => {
    const { width } = Sizing.screen;
    const theme = useAppSelector((state) => state.theme);

    return (
        <ScrollView
            style={[styles.container, { backgroundColor: Theme[theme].background_default }]}
        >
            <View style={styles.step}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={[styles.text, { color: Theme[theme].text_primary }]}>
                        Pressione o ícone indicado na figura:
                    </Text>
                </View>
                <Image
                    source={require("../../assets/ios/A2HS1.png")}
                    alt="Imagem mostrando o icone"
                    style={{
                        resizeMode: "contain",
                        marginTop: 16,
                        width: "100%",
                        ...Platform.select({
                            web: { maxWidth: 500, maxHeight: 500 * 0.27 },
                        }),
                        height: width * 0.27,
                    }}
                />
            </View>
            <View style={styles.step}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={[styles.text, { color: Theme[theme].text_primary }]}>
                        Selecione a opção “Adicionar à Tela de início”
                    </Text>
                </View>
                <View style={{ borderRadius: 16 }}>
                    <Image
                        source={require("../../assets/ios/A2HS2.png")}
                        alt="asdf"
                        style={{
                            resizeMode: "contain",
                            marginTop: 16,
                            width: "100%",
                            ...Platform.select({
                                web: { maxWidth: 500, maxHeight: 500 * 1.2 },
                            }),
                            height: width * 1.2,
                        }}
                    />
                </View>
            </View>
            <View style={styles.step}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={[styles.text, { color: Theme[theme].text_primary }]}>
                        Em seguida em “Adicionar”
                    </Text>
                </View>

                <Image
                    source={require("../../assets/ios/A2HS3.png")}
                    alt="asdf"
                    style={{
                        resizeMode: "contain",
                        marginTop: 16,
                        width: "100%",
                        ...Platform.select({
                            web: { maxWidth: 500, maxHeight: 500 * 0.6 },
                        }),
                        height: width * 0.6,
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default A2HSTutorialIOS;
