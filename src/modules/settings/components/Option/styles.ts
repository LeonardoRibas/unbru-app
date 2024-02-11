import { StyleSheet } from "react-native";
import { Sizing, Colors, Typography } from "src/styles";

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: Sizing.layout.x30,
        paddingVertical: Sizing.layout.x20,
    },
    infoWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleWrapper: {
        marginLeft: Sizing.layout.x30,
    },
    titleText: {
        fontSize: Typography.fontSize.x20,
        fontFamily: Typography.fontWeight.medium,
        marginBottom: Sizing.layout.x10,
    },
    subTitleText: {
        fontSize: Typography.fontSize.x10,
        fontFamily: Typography.fontWeight.medium,
    },
});

export default styles;
