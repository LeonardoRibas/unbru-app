import { StyleSheet } from "react-native";

import { Sizing, Outlines, Colors, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        maxWidth: 500,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: Sizing.layout.x20,
        paddingHorizontal: Sizing.layout.x80,
        borderRadius: Outlines.borderRadius.small,
        backgroundColor: Colors.primary.base,
    },
    text: {
        color: Colors.neutral.white,
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x20,
    },
});

export default styles;
