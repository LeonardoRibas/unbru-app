import { StyleSheet } from "react-native";
import { Sizing, Typography } from "src/styles";

const styles = StyleSheet.create({
    container: {
        width: Sizing.screen.width >= 768 ? "100%" : Sizing.screen.width * 0.8 - Sizing.layout.x10,
        marginHorizontal: Sizing.screen.width >= 768 ? 0 : Sizing.layout.x10,
        padding: Sizing.layout.x20,
        marginVertical: Sizing.screen.width >= 768 ? Sizing.layout.x10 : Sizing.layout.x20,
        borderRadius: Sizing.layout.x20,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 10,
        gap: 8,
    },
    labelContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    label: {
        flex: 1,
        flexWrap: "wrap",
        fontFamily: Typography.fontWeight.regular,
        fontSize: Typography.fontSize.x10,
    },
    dish: {
        flexDirection: "row",
        flexWrap: "wrap",
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x20,
        opacity: 0.8,
    },
});

export default styles;
