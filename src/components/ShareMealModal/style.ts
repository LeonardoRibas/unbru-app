import { StyleSheet } from "react-native";
import { Sizing, Typography, Colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral.white,
        marginHorizontal: Sizing.margin.base,
        paddingBottom: 12,
        borderRadius: 20,
        overflow: "hidden",
    },
    headerContainer: {
        alignItems: "center",
        backgroundColor: Colors.primary.base,
        paddingVertical: 12,
    },
    subHeaderContainer: {
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 8,
    },
    title: {
        fontFamily: Typography.fontWeight.bold,
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.white,
    },
    subtitle: {
        fontFamily: "Lexend_500Medium",
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.s900,
    },
    logotypeContainer: {
        alignItems: "center",
        paddingVertical: 8,
    },
});

export default styles;
