import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import { BrandLogo } from "../../../assets/logo";

const About = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <BrandLogo />
                <View style={styles.textContainer}>
                    <Text style={styles.logoType}>UnBRU</Text>
                    <Text style={styles.version}>V 1.0.0</Text>
                </View>
            </View>
        </View>
    );
};

export default About;
