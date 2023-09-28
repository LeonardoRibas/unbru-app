import { StyleSheet } from "react-native";
import { Sizing, Typography, Colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: Sizing.screen.width >= 768 ? 0 : Sizing.margin.base - 8,
        backgroundColor: "white",
        paddingVertical: Sizing.layout.x15 - 8,
    },
    title: {
        position: "absolute",
        fontFamily: "Lexend_500Medium",
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.s900,
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
        color: Colors.neutral.s400,
        marginLeft: 8,
    },
    hourInfoWrapper: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
    },
});

export default styles;
