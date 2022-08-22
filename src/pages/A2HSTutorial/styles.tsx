import { StyleSheet } from "react-native";
import { Colors, Sizing, Typography } from "../../styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral.white,
        flex: 1,
        paddingHorizontal: Sizing.margin.base,
        paddingTop: Sizing.layout.x30,
    },
    text: {
        fontSize: Typography.fontSize.x20,
        fontFamily: Typography.fontWeight.medium,
    },
});

export default styles;
