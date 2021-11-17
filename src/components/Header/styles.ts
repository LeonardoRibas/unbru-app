import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import * as colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 56 + Constants.statusBarHeight,
        backgroundColor: colors.primary.brand,
    },
    leftButtonWrapper: {
        position: "absolute",
        left: 16,
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4,
    },
    rightButtonWrapper: {
        position: "absolute",
        right: 16,
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4,
    },
    buttonTextLeft: {
        fontFamily: "Lexend_500Medium",
        fontSize: 13,
        color: colors.neutral.white,
        marginRight: 10,
    },
    buttonTextRight: {
        fontFamily: "Lexend_500Medium",
        fontSize: 13,
        marginLeft: 10,
        color: colors.neutral.white,
    },
    title: {
        fontFamily: "Lexend_700Bold",
        fontSize: 20,
        color: colors.neutral.white,
    },
});

export default styles;
