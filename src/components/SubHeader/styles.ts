import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginVertical: 24,
    },
    title: {
        fontFamily: "Lexend_600SemiBold",
        fontSize: 25,
        color: "#272E28",
        marginRight: 40,
    },
    hourInfoText: {
        fontFamily: "Lexend_500Medium",
        fontSize: 13,
        color: "#969696",
        marginLeft: 4,
    },
    hourInfoWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default styles;
