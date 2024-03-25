import { StyleSheet } from "react-native";

import * as Colors from "./colors";

export const borderRadius = {
    small: 8,
    base: 16,
    large: 24,
    max: 32,
};

export const borderWidth = {
    hairline: StyleSheet.hairlineWidth,
    thin: 1,
    base: 2,
    thick: 3,
};

export const shadow = {
    base: {
        shadowColor: Colors.neutral.s500,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
};
