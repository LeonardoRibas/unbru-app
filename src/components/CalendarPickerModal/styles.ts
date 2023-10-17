import { StyleSheet } from "react-native";
import { Colors, Sizing, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral.white,
        borderTopStartRadius: Sizing.layout.x20,
        borderTopEndRadius: Sizing.layout.x20,
    },
    wrapper: {
        gap: 20,
        alignItems: "center",
        paddingHorizontal: Sizing.margin.base,
        paddingBottom: 20,
        paddingTop: Sizing.layout.x10,
        backgroundColor: Colors.neutral.white,
        borderTopStartRadius: Sizing.layout.x20,
        borderTopEndRadius: Sizing.layout.x20,
    },
    handle: {
        width: Sizing.layout.x80,
        height: Sizing.layout.x05,
        borderRadius: 2,
        backgroundColor: Colors.neutral.s500,
        alignSelf: "center",
    },
    title: {
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x20,
    },
});

export default styles;
