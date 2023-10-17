import { StyleSheet } from "react-native";
import { Colors, Typography } from "src/styles";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        maxWidth: 500,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "hsla(127, 43%, 96%, 1)",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        borderColor: Colors.primary.base,
        borderWidth: 1,
    },
    infoWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    textWrapper: {
        gap: 4,
    },
    label: {
        fontFamily: Typography.fontWeight.regular,
        fontSize: Typography.fontSize.x05,
        color: Colors.neutral.s600,
    },
    title: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x10,
        color: Colors.neutral.s900,
    },
});

export default styles;
