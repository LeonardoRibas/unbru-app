import { StyleSheet } from "react-native";

import { Sizing, Colors, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        paddingTop: Sizing.layout.x10,
        paddingBottom: Sizing.layout.x10 + 1,
        paddingLeft: Sizing.margin.base,
        paddingRight: Sizing.layout.x60,
        backgroundColor: "white",
        flexDirection: "row",
    },
    emojiContainer: {
        width: Sizing.layout.x60,
        height: Sizing.layout.x60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Sizing.layout.x20,
    },
    emoji: {
        fontSize: Typography.fontSize.x50,
    },
    content: {
        maxWidth: "100%",
        paddingHorizontal: Sizing.layout.x20,
    },
    label: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x15,
        color: Colors.neutral.s500,
    },
    dish: {
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x25,
        color: Colors.neutral.s800,
        marginBottom: Sizing.layout.x05,
    },
});

export default styles;
