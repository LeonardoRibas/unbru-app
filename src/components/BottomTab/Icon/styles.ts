import { StyleSheet } from "react-native";
import { Typography, Sizing } from "../../../styles";

const styles = StyleSheet.create({
    label: {
        fontSize: Typography.fontSize.x10,
        fontFamily: Typography.fontWeight.medium,
        marginTop: Sizing.layout.x05,
    },
    option: {
        alignItems: "center",
    },
});

export default styles;
