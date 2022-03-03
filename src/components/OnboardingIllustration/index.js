import React from "react";
import { Platform } from "react-native";
import Illustration from "../../../assets/illustrations/onboarding.svg";
import { Sizing } from "../../styles";

const OnboardingIllustration = Platform.select({
    ios: () => <Illustration height={Sizing.screen.height * 0.4} />,
    android: () => <Illustration height={Sizing.screen.height * 0.4} />,
    web: () => <img src={Illustration}></img>,
});

export default OnboardingIllustration;
