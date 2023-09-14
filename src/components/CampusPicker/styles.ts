import { StyleSheet } from "react-native";
import { Colors, Sizing, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Sizing.margin.base,
        paddingBottom: Sizing.layout.x20,
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
        marginBottom: Sizing.layout.x20,
    },

    campusOptionContainer: {
        marginVertical: Sizing.layout.x20,
    },
    campusText: {
        fontFamily: Typography.fontWeight.regular,
        fontSize: Typography.fontSize.x20,
    },
    buttonContainer: {
        marginVertical: Sizing.layout.x20,
    },
});

export default styles;
