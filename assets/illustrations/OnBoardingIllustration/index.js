import React from "react";
import { Platform } from "react-native";
import Illustration from "./onboarding.svg";
import { Sizing } from "@modules/common/styles";

const OnboardingIllustrationWeb = () => <img src={Illustration}></img>;

const OnboardingIllustrationMobile = () => <Illustration height={Sizing.screen.height * 0.4} />;

export default Platform.OS === "web" ? OnboardingIllustrationWeb : OnboardingIllustrationMobile;
