import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import AboutIllustration from "assets/illustrations/AboutIllustration";

const About = () => {
    return (
        <View style={styles.container}>
            <AboutIllustration />
            <Text>Ajude o UnBRU!</Text>
            <Text>
                O aplicativo do UnBRU é mantido de forma independente e totalmente gratuita!
                Contribua com o projeto para continuarmos melhorando o app cada vez mais!
            </Text>
        </View>
    );
};

export default About;
