import React from "react";
import LogoTypeSvg from "./logotype.svg";
import { Platform } from "react-native";

export const LogoType = Platform.select({
    ios: () => <LogoTypeSvg />,
    android: () => <LogoTypeSvg />,
    web: () => <img src={LogoTypeSvg}></img>,
});
