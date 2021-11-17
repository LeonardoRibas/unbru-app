import { StyleSheet } from "react-native";
import { Typography } from "../../styles";

const styles = StyleSheet.create({
    container: (mealType) => ({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderTopLeftRadius: mealType == "Desjejum" ? 20 : 0,
        borderTopRightRadius: mealType == "Jantar" ? 20 : 0,
    }),
    title: {
        fontFamily: "Lexend_500Medium",
        fontSize: Typography.fontSize.x30,
        color: "#272E28",
        marginRight: 40,
        paddingTop: 20,
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
        paddingTop: 20,
    },
});

export default styles;
