import { StyleSheet } from "react-native";
import { Sizing, Typography } from "../../styles";

const styles = StyleSheet.create({
    title: {
        fontSize: Typography.fontSize.x30,
        fontFamily: Typography.fontWeight.semiBold,
        alignItems: "center",
    },
    container: {
        paddingHorizontal: Sizing.margin.base,
        paddingVertical: Sizing.layout.x20,
        flexDirection: "row",
        justifyContent: "center",
    },
    icon: {
        position: "absolute",
        left: Sizing.margin.base,
        top: 40,
    },
});

export default styles;
