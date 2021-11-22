import { StyleSheet } from "react-native";
import { Sizing, Colors } from "../../styles";

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
});

export default styles;
