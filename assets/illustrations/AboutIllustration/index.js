import React from "react";
import { Platform } from "react-native";
import Illustration from "./about.svg";
import { Sizing } from "src/styles";

const AboutIllustrationWeb = () => <img src={Illustration}></img>;

const AboutIllustrationMobile = () => <Illustration />;

export default Platform.OS === "web" ? AboutIllustrationWeb : AboutIllustrationMobile;
