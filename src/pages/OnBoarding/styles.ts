import { StyleSheet } from "react-native";
import { Colors, Sizing } from "../../styles";
import { Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.neutral.white,
        paddingHorizontal: Sizing.margin.base,
        paddingVertical: 32,
    },
    textContent: {
        width: "100%",
        maxWidth: 500,
        alignItems: "center",
        gap: 16,
    },
    actionContent: {
        width: "100%",
        alignItems: "center",
        gap: 16,
    },
    actionLabel: {
        fontFamily: Typography.fontWeight.regular,
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.s900,
        lineHeight: 23,
    },
    title: {
        fontFamily: Typography.fontWeight.bold,
        fontSize: Typography.fontSize.x40,
        textAlign: "center",
    },
    subTitle: {
        paddingHorizontal: 32,
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x20,
        textAlign: "center",
        color: Colors.neutral.s600,
        lineHeight: 22,
    },
    highlight: {
        color: Colors.primary.base,
    },
});

export default styles;
