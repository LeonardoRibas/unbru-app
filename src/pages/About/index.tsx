import React from "react";
import { Center, VStack, Text } from "native-base";
import { BrandLogo } from "../../../assets/logo";
import styles from "./styles";

const About = () => {
    return (
        <Center size="full" bg="white">
            <VStack space={8} alignItems="center">
                <BrandLogo />
                <VStack space={2} alignItems="center">
                    <Text style={styles.logoType}>UnBRU</Text>
                    <Text style={styles.version}>V 0.0.1</Text>
                </VStack>
            </VStack>
        </Center>
    );
};

export default About;
