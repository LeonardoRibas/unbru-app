import { StyleSheet } from "react-native";
import { Sizing, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: Sizing.screen.width >= 768 ? 0 : Sizing.margin.base,
        backgroundColor: "white",
    },
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
