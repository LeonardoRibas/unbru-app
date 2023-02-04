import { StyleSheet } from "react-native";
import { Sizing, Colors, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        width: Sizing.screen.width >= 768 ? "100%" : Sizing.screen.width * 0.8 - Sizing.layout.x10,
        marginHorizontal: Sizing.screen.width >= 768 ? 0 : Sizing.layout.x10,
        flexDirection: "row",
        alignItems: "center",
        padding: Sizing.margin.base,
        marginVertical: Sizing.screen.width >= 768 ? Sizing.layout.x10 : Sizing.layout.x20,
        borderRadius: Sizing.layout.x20,
        backgroundColor: Colors.neutral.white,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 10,
    },
    emojiContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: Sizing.layout.x10,
        borderRadius: Sizing.layout.x15,
        marginRight: Sizing.layout.x20,
    },
    emoji: {
        height: 32,
        width: 32,
    },
    content: { flex: 1 },
    label: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x15,
        color: Colors.neutral.s800,
        marginBottom: Sizing.layout.x10,
        opacity: 0.7,
    },
    dish: {
        flexDirection: "row",
        flexWrap: "wrap",
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x30,
        color: Colors.neutral.black,
        opacity: 0.8,
    },
});

export default styles;
