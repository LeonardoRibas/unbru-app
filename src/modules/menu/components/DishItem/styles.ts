import { StyleSheet } from "react-native";

import { Sizing, Typography } from "../../../../styles";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        paddingHorizontal: Sizing.margin.base,
        paddingVertical: Sizing.layout.x15,
        flexDirection: "row",
    },
    infoContainer: {
        flex: 1,
        marginLeft: Sizing.layout.x20,
    },
    label: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x10,
        marginBottom: Sizing.layout.x10,
    },
    dish: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x15,
    },
});

export default styles;
