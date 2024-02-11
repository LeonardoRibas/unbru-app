import { StyleSheet } from "react-native";
import { Colors, Sizing } from "src/styles";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.neutral.white,
        borderTopStartRadius: Sizing.layout.x20,
        borderTopEndRadius: Sizing.layout.x20,
    },
    wrapper: {
        paddingHorizontal: Sizing.margin.base,
        paddingBottom: Sizing.layout.x20,
        paddingTop: Sizing.layout.x10,
        borderTopStartRadius: Sizing.layout.x20,
        borderTopEndRadius: Sizing.layout.x20,
    },
    handle: {
        width: Sizing.layout.x80,
        height: Sizing.layout.x05,
        borderRadius: 2,
        backgroundColor: Colors.neutral.s500,
        alignSelf: "center",
        marginBottom: Sizing.layout.x20,
    },
    buttonContainer: {
        alignItems: "center",
        marginVertical: Sizing.layout.x20,
    },
});

export default styles;
