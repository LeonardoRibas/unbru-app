import React from "react";
import { Image, VStack, Text, View } from "native-base";
import styles from "./styles";
import { Sizing } from "../../styles";

const A2HSTutorial = () => {
    const { width, height } = Sizing.screen;

    return (
        <VStack space={10} style={styles.container}>
            <View>
                <Text>1 - Pressione o ícone indicado na figura:</Text>
                <Image
                    source={require("../../../assets/A2HSTutorial/A2HS1.png")}
                    alt="Imagem mostrando o icone"
                    style={{ marginTop: 16, width: 332, height: 72, borderRadius: 16 }}
                />
            </View>
            <View>
                <Text>
                    2 - Selecione a opção “Adicionar à tela principal” e em seguida em “Adicionar”
                </Text>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 16 }}>
                    <Image
                        source={require("../../../assets/A2HSTutorial/A2HS2.png")}
                        alt="asdf"
                        style={{ width: (width - 40) / 2, height: ((width - 40) / 2) * (16 / 9) }}
                        resizeMode="contain"
                    />
                    <Image
                        source={require("../../../assets/A2HSTutorial/A2HS3.png")}
                        alt="asdf"
                        style={{ width: (width - 40) / 2, height: ((width - 40) / 2) * (16 / 9) }}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </VStack>
    );
};

export default A2HSTutorial;
