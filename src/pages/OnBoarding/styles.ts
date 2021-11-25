import { StyleSheet } from "react-native";
import { Colors, Sizing } from "../../styles";
import { Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: Colors.neutral.white,
    },
    content: {
        alignItems: "center",
    },
    title: {
        fontFamily: Typography.fontWeight.bold,
        fontSize: Typography.fontSize.x40,
        textAlign: "center",
        marginTop: Sizing.layout.x20,
        marginBottom: Sizing.layout.x20,
    },
    subTitle: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x20,
        textAlign: "center",
        color: Colors.neutral.s500,
        lineHeight: 22,
    },
    highlight: {
        color: Colors.primary.brand,
    },
});

export default styles;
