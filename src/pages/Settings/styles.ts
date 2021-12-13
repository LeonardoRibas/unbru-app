import { StyleSheet } from "react-native";
import { Sizing, Colors, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral.white,
        flex: 1,
    },
    baseButton: {
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        maxHeight: 80,
        paddingHorizontal: Sizing.layout.x30,
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
        fontSize: Typography.fontSize.x15,
        color: Colors.neutral.s500,
        paddingVertical: 3,
    },
});

export default styles;
