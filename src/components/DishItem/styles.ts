import { StyleSheet } from "react-native";

import { Sizing, Outlines, Colors, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        paddingTop: Sizing.layout.x20,
        paddingBottom: Sizing.layout.x20 + 1,
        borderBottomWidth: Outlines.borderWidth.thin,
        borderBottomColor: Colors.neutral.s250,
        marginLeft: Sizing.margin.base,
        marginRight: Sizing.layout.x60,
    },
    label: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x15,
        color: Colors.neutral.s500,
        marginBottom: Sizing.layout.x10,
    },
    dish: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.black,
    },
});

export default styles;
