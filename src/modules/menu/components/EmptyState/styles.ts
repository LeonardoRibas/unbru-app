import { StyleSheet } from "react-native";
import { Typography, Colors } from "src/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },
    title: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.s600,
        marginBottom: 48,
    },
});

export default styles;
