import { StyleSheet } from "react-native";

import { Sizing, Outlines, Colors, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: Sizing.layout.x20,
        paddingHorizontal: Sizing.layout.x80,
        borderRadius: Outlines.borderRadius.base,
        backgroundColor: Colors.primary.brand,
    },
    text: {
        color: Colors.neutral.white,
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x20,
    },
});

export default styles;
