import { Dimensions, StyleSheet } from "react-native";

import { Sizing, Colors, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        padding: Sizing.layout.x20,
        flexDirection: "row",
        margin: Sizing.layout.x20,
        borderRadius: Sizing.layout.x20,
        flex: 1,
    },
    emojiContainer: {
        width: Sizing.layout.x60,
        height: Sizing.layout.x60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Sizing.layout.x60,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    emoji: {
        fontSize: Typography.fontSize.x50,
    },
    content: {
    flex: 1,
        paddingLeft: Sizing.layout.x20,
    paddingRight: Sizing.layout.x30,
    },
    label: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x15,
        color: Colors.neutral.s800,
    opacity: 0.7,
    },
    dish: {
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x30,
        color: Colors.neutral.black,
        marginBottom: Sizing.layout.x05,
    opacity: 0.8,
    },
});

export default styles;
