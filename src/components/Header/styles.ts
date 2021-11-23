import { StyleSheet } from "react-native";
import { Sizing, Typography, Colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.primary.brand,
        paddingHorizontal: Sizing.margin.base,
        paddingVertical: Sizing.layout.x20,
    },
    title: {
        fontFamily: Typography.fontWeight.bold,
        fontSize: Typography.fontSize.x30,
        color: Colors.neutral.white,
    },
    icon: {
        padding: 4,
    },
});

export default styles;
