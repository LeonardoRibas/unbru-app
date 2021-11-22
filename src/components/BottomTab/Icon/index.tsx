import BreakfastIcon from "../../../components/Svg/BreakfastIcon";
import LunchIcon from "../../../components/Svg/LunchIcon";
import DinnerIcon from "../../../components/Svg/DinnerIcon";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { Colors } from "../../../styles";
import styles from "./styles";

type IconProps = {
    type: "lunch" | "dinner" | "breakfast";
    index: number;
    onPress: () => void;
};

export default function Icon({ index, type, onPress }: IconProps): React.ReactElement {
    let color = Colors.neutral.s500;

    switch (type) {
        case "breakfast":
            index === 0 ? (color = Colors.primary.brand) : (color = Colors.neutral.s500);
            return (
                <Pressable onPress={onPress}>
                    <View style={styles.option}>
                        <BreakfastIcon color={color} />
                        <Text style={{ ...styles.label, ...{ color: color } }}>Desjejum</Text>
                    </View>
                </Pressable>
            );
        case "lunch":
            index === 1 ? (color = Colors.primary.brand) : (color = Colors.neutral.s500);
            return (
                <Pressable onPress={onPress}>
                    <View style={styles.option}>
                        <LunchIcon color={color} />
                        <Text style={{ ...styles.label, ...{ color: color } }}>Almoço</Text>
                    </View>
                </Pressable>
            );
        case "dinner":
            index === 2 ? (color = Colors.primary.brand) : (color = Colors.neutral.s500);
            return (
                <Pressable onPress={onPress}>
                    <View style={styles.option}>
                        <DinnerIcon color={color} />
                        <Text style={{ ...styles.label, ...{ color: color } }}>Jantar</Text>
                    </View>
                </Pressable>
            );
        default:
            index === 0 ? (color = Colors.primary.brand) : (color = Colors.neutral.s500);
            return (
                <Pressable onPress={onPress}>
                    <View style={styles.option}>
                        <BreakfastIcon color={color} />
                        <Text style={{ ...styles.label, ...{ color: color } }}>Desjejum</Text>
                    </View>
                </Pressable>
            );
    }
}
