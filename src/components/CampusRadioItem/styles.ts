import { StyleSheet } from "react-native";
import { Sizing, Typography } from "src/styles";

const styles = StyleSheet.create({
    container: {
        paddingVertical: Sizing.layout.x20,
        flexDirection: "row",
        gap: Sizing.layout.x20,
    },
    title: {
        fontFamily: Typography.fontWeight.regular,
        fontSize: Typography.fontSize.x20,
    },
    campusSelectedText: {
        fontFamily: Typography.fontWeight.bold,
        fontSize: Typography.fontSize.x20,
    },
    buttonContainer: {
        marginVertical: Sizing.layout.x20,
    },
});

export default styles;
