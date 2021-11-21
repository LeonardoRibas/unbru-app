import Constants from "expo-constants";
import { StyleSheet } from "react-native";
import * as colors from "../../styles/colors";
import { Sizing } from '../../styles';

const styles = StyleSheet.create({
    safeAreaContainer: {
      height: Constants.statusBarHeight,
      backgroundColor: colors.primary.brand,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: Sizing.layout.x70,
        backgroundColor: colors.primary.brand,
        paddingHorizontal: Sizing.layout.x30,
    },
    title: {
        fontFamily: "Lexend_700Bold",
        fontSize: 20,
        color: colors.neutral.white,
    },
});

export default styles;
