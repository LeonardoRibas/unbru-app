import { StyleSheet } from "react-native";
import { Theme, Typography } from "@modules/common/styles";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        maxWidth: 500,
        gap: 12,
    },
    label: {
        fontSize: 14,
        fontFamily: Typography.fontWeight.medium,
        marginLeft: 4,
    },
    inputContainer: {
        flexDirection: "row",
        borderRadius: 12,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 10,
    },
    inputContent: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    actionIconContainer: {
        backgroundColor: Theme.light.color_primary,
        padding: 12,
        alignSelf: "flex-end",
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    inputText: {
        fontSize: 16,
        fontFamily: Typography.fontWeight.regular,
    },
});

export default styles;
