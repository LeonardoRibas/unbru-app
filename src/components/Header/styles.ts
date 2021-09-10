import Constants from "expo-constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 56 + Constants.statusBarHeight,
        backgroundColor: "white",
    },
    leftButtonWrapper: {
        position: "absolute",
        left: 16,
        bottom: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4,
    },
    rightButtonWrapper: {
        position: "absolute",
        right: 16,
        bottom: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 4,
    },
    buttonTextLeft: {
        fontFamily: "Lexend_500Medium",
        fontSize: 13,
        color: "#7E7E7E",
        marginRight: 10,
    },
    buttonTextRight: {
        fontFamily: "Lexend_500Medium",
        fontSize: 13,
        color: "#7E7E7E",
        marginLeft: 10,
    },
    title: {
        fontFamily: "Lexend_500Medium",
        fontSize: 20,
    },
});

export default styles;
