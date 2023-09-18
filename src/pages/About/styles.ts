import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutral.white,
        justifyContent: "center",
    },
    contentContainer: {
        alignItems: "center",
        gap: 32,
    },
    textContainer: {
        alignItems: "center",
        gap: 8,
    },
    logoType: {
        fontSize: Typography.fontSize.x30,
        fontFamily: Typography.fontWeight.bold,
        color: Colors.primary.base,
    },
    version: {
        fontSize: Typography.fontSize.x10,
        fontFamily: Typography.fontWeight.medium,
    },
});

export default styles;
