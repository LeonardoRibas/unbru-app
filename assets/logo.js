import React from "react";
import Logo from "./logo.svg";
import { Platform } from "react-native";

export const BrandLogo = Platform.select({
    ios: () => <Logo />,
    android: () => <Logo />,
    web: () => <img src={Logo}></img>,
});
