import { StyleSheet } from "react-native";
import { Typography, Sizing } from "../../../styles";

const styles = StyleSheet.create({
    label: {
        fontSize: Typography.fontSize.x15,
        fontFamily: Typography.fontWeight.semiBold,
        marginTop: Sizing.layout.x05,
    },
    option: {
        alignItems: "center",
    },
});

export default styles;
