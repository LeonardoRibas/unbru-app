import { StyleSheet } from "react-native";
import { Typography, Theme } from "../../../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 40,
    },
    illustrationContainer: {
        margin: 24,
    },
    title: {
        fontSize: Typography.fontSize.x40,
        fontFamily: Typography.fontWeight.bold,
        marginBottom: 24,
    },
    description: {
        maxWidth: 500,
        fontSize: Typography.fontSize.x20,
        fontFamily: Typography.fontWeight.medium,
        textAlign: "center",
        marginBottom: 32,
        lineHeight: 25,
    },
    linkContainer: {
        padding: 8,
    },
    link: {
        fontSize: Typography.fontSize.x15,
        fontFamily: Typography.fontWeight.medium,
    },
    footerText: {
        fontSize: Typography.fontSize.x15,
        fontFamily: Typography.fontWeight.medium,
    },
    textHighlight: {
        color: Theme.light.color_primary,
    },
    textUnderscored: {
        textDecorationLine: "underline",
    },
});

export default styles;
