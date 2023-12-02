import { StyleSheet } from "react-native";
import { Sizing, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Sizing.margin.base,
        paddingVertical: Sizing.layout.x20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        position: "absolute",
        left: Sizing.margin.base - 8,
        padding: 8,
    },
    title: {
        fontSize: Typography.fontSize.x20,
        fontFamily: Typography.fontWeight.semiBold,
        alignItems: "center",
    },
});

export default styles;
