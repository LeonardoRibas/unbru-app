import { StyleSheet } from "react-native";
import { Sizing, Typography, Colors } from "@modules/common/styles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.primary.base,
        paddingHorizontal: Sizing.margin.base - 8,
        paddingVertical: Sizing.layout.x15 - 8,
    },
    buttonContainer: {
        padding: 8,
    },
    title: {
        fontFamily: Typography.fontWeight.bold,
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.white,
    },
    icon: {
        padding: 4,
    },
});

export default styles;
