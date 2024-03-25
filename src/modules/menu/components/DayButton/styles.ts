import { StyleSheet } from "react-native";
import { Sizing, Colors, Typography } from "@modules/common/styles";

const styles = StyleSheet.create({
    container: {
        marginRight: Sizing.layout.x30,
        alignItems: "center",
    },
    title: {
        fontFamily: Typography.fontWeight.medium,
        fontSize: Typography.fontSize.x10,
        color: Colors.neutral.s600,
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
        color: Colors.neutral.s900,
    },
    selectedDayButtonText: {
        fontFamily: Typography.fontWeight.semiBold,
        fontSize: Typography.fontSize.x20,
        color: Colors.neutral.white,
    },
});

export default styles;
