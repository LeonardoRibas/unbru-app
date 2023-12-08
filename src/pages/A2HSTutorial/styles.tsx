import { StyleSheet } from "react-native";
import { Colors, Sizing, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Sizing.margin.base,
        paddingTop: Sizing.layout.x30,
    },
    step: {
        marginBottom: Sizing.layout.x30,
        width: "100%",
        justifyContent: "flex-start",
    },
    text: {
        fontSize: Typography.fontSize.x20,
        fontFamily: Typography.fontWeight.medium,
    },
});

export default styles;
