import { StyleSheet } from "react-native";
import { Colors, Sizing, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Sizing.margin.base,
        paddingVertical: Sizing.layout.x20,
        backgroundColor: Colors.neutral.white,
        borderTopStartRadius: Sizing.layout.x20,
        borderTopEndRadius: Sizing.layout.x20,
    },
    title: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x20,
        marginBottom: Sizing.layout.x30,
    },
    dayWrapper: {
        alignItems: "center",
        marginRight: Sizing.layout.x30,
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
    dayButtonText: {
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.s500,
    },
    selectedDayButtonText: {
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x20,
        color: Colors.primary.brand,
    },
});

export default styles;
