import React from "react";
import { Platform } from "react-native";
import Breakfast from "./breakfast.svg";
import Lunch from "./lunch.svg";
import Dinner from "./dinner.svg";
import { Sizing } from "../../src/styles";

export const BreakfastIcon = Platform.select({
    ios: ({ fill }) => <Breakfast fill={fill} />,
    android: ({ fill }) => <Breakfast fill={fill} />,
    web: () => <img src={Breakfast}></img>,
});

export const LunchIcon = Platform.select({
    ios: ({ fill }) => <Lunch fill={fill} />,
    android: ({ fill }) => <Lunch fill={fill} />,
    web: () => <img src={Lunch}></img>,
});

export const DinnerIcon = Platform.select({
    ios: ({ fill }) => <Dinner fill={fill} />,
    android: ({ fill }) => <Dinner fill={fill} />,
    web: () => <img src={Dinner}></img>,
});
