import { StyleSheet } from "react-native";
import { Colors, Sizing } from "../../styles";
import { Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.neutral.white,
    },
    title: {
        fontFamily: Typography.fontWeight.bold,
        fontSize: Typography.fontSize.x40,
        textAlign: "center",
        marginTop: Sizing.layout.x40,
        marginBottom: Sizing.layout.x20,
    },
    subTitle: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x20,
        textAlign: "center",
        color: Colors.neutral.s500,
        marginBottom: Sizing.layout.x100,
        lineHeight: 22,
    },
    highlight: {
        color: Colors.primary.brand,
    },
});

export default styles;
