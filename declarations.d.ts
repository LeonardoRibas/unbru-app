declare module "*.svg" {
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}

type TDayMenu = {
    date: string;
    breakfast: Record<string, unknown>;
    lunch: Record<string, unknown>;
    dinner: Record<string, unknown>;
};
