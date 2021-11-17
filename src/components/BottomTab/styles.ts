import { StyleSheet } from "react-native";
import { Typography, Sizing, Colors, Outlines } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: Sizing.layout.x10,
        backgroundColor: Colors.neutral.white,
        shadowColor: Colors.neutral.s500,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    option: {
        alignItems: "center",
    },
    lable: {
        fontSize: Typography.fontSize.x10,
        fontFamily: Typography.fontWeight.medium,
        marginTop: Sizing.layout.x05,
        color: Colors.neutral.s500,
    },
});

export default styles;
