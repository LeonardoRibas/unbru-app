import { StyleSheet } from "react-native";

import { Sizing, Colors, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral.white,
        flex: 1,
        paddingHorizontal: Sizing.layout.x30,
    },
    baseButton: {
        width: "100%",
        height: 48,
        justifyContent: "center",
        marginVertical: Sizing.layout.x20,
    },
    iconView: {
        paddingEnd: Sizing.layout.x30,
    },
    tittle: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x20,
        paddingVertical: 3,
    },
    text: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x10,
        color: Colors.neutral.s500,
        paddingVertical: 3,
    },
    buttonView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
});

export default styles;
