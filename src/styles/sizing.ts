import { Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");
export const screen = {
    width: screenWidth,
    height: screenHeight,
};

export const layout = {
    x10: 8,
    x15: 12,
    x20: 16,
    x30: 24,
    x40: 32,
    x50: 40,
    x60: 48,
    x70: 56,
    x80: 64,
    x90: 72,
    x100: 80,
};

export const margin = {
    base: 20,
};

export const iconStroke = {
    x1: 1,
    x2: 1.5,
    x3: 2,
};
