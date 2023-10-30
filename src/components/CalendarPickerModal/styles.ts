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
        paddingHorizontal: Sizing.margin.base,
        paddingBottom: 20,
        paddingTop: Sizing.layout.x10,
        backgroundColor: Colors.neutral.white,
        borderTopStartRadius: Sizing.layout.x20,
        borderTopEndRadius: Sizing.layout.x20,
    },
    handle: {
        alignSelf: "center",
        width: Sizing.layout.x80,
        height: Sizing.layout.x05,
        borderRadius: 2,
        backgroundColor: Colors.neutral.s500,
    },
    title: {
        alignSelf: "center",
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x20,
    },
});

export default styles;
