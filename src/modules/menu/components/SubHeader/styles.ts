import { StyleSheet } from "react-native";
import { Sizing, Typography, Colors } from "../../../../styles";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: Sizing.screen.width >= 768 ? 0 : Sizing.margin.base - 8,
        paddingVertical: Sizing.layout.x15 - 8,
    },
    title: {
        position: "absolute",
        fontFamily: "Lexend_500Medium",
        fontSize: Typography.fontSize.x20,
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
    },
    buttonContainer: {
        padding: 8,
    },
    hourInfoText: {
        fontFamily: "Lexend_500Medium",
        fontSize: Typography.fontSize.x10,
    },
    hourInfoWrapper: {
        gap: 8,
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
    },
});

export default styles;
