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
    },
    title: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x20,
        marginBottom: Sizing.layout.x30,
    },
    dayWrapper: {
        marginRight: Sizing.layout.x30,
        alignItems: "center",
    },
    weekDayTitle: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x15,
        color: Colors.neutral.s500,
        marginBottom: Sizing.layout.x10,
    },
    dayButtonContainer: {
        backgroundColor: Colors.neutral.white,
        padding: Sizing.layout.x10,
    },
    selectedDayButtonContainer: {
        padding: Sizing.layout.x10,
        borderRadius: Sizing.layout.x15,
        backgroundColor: Colors.primary.base,
    },
    dayButtonText: {
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.s500,
    },
    selectedDayButtonText: {
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.white,
    },
});

export default styles;
