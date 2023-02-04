import { StyleSheet } from "react-native";

import { Sizing, Colors, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: Sizing.margin.base,
        backgroundColor: "white",
        flexDirection: "row",
    },
    emoji: {
        marginRight: Sizing.layout.x20,
        height: 42,
        width: 42,
    },
    content: {
        flex: 1,
    },
    label: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x10,
        color: Colors.neutral.s500,
        marginBottom: Sizing.layout.x10,
    },
    dish: {
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.s800,
    },
});

export default styles;
