import Constants from "expo-constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 56 + Constants.statusBarHeight,
        paddingHorizontal: 16,
    },
    buttonWrapper: {
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
