import { StyleSheet } from "react-native";
import { Sizing, Typography, Colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral.white,
        marginHorizontal: Sizing.margin.base,
        borderRadius: 30,
        paddingBottom: 24,
    },
    headerContainer: {
        alignItems: "center",
        backgroundColor: Colors.primary.base,
        paddingVertical: 12,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
    emoji: {
        marginRight: Sizing.layout.x20,
        height: 40,
        width: 40,
    },
    dishContainer: {
        alignItems: "center",
        paddingHorizontal: Sizing.margin.base,
        paddingVertical: Sizing.layout.x15,
        backgroundColor: "white",
        flexDirection: "row",
    },
    label: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x10,
        color: Colors.neutral.s500,
        marginBottom: Sizing.layout.x05,
    },
    dish: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x15,
        color: Colors.neutral.s800,
    },
});

export default styles;
