import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../styles";

const styles = StyleSheet.create({
    logoType: {
        fontSize: Typography.fontSize.x30,
        fontFamily: Typography.fontWeight.bold,
        color: Colors.primary.base,
    },
    version: {
        fontSize: Typography.fontSize.x10,
        fontFamily: Typography.fontWeight.medium,
    },
});

export default styles;
