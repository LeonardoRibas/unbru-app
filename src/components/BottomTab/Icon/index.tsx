import BreakfastIcon from "../../../../assets/icons/breakfast.svg";
import LunchIcon from "../../../../assets/icons/lunch.svg";
import DinnerIcon from "../../../../assets/icons/dinner.svg";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { Colors } from "../../../styles";
import styles from "./styles";

type IconProps = {
    type: "lunch" | "dinner" | "breakfast";
    selected: boolean;
    onPress: () => void;
};

export default function Icon({ selected, type, onPress }: IconProps): React.ReactElement {
    const handleSelectionColor = () => {
        return selected ? Colors.primary.brand : Colors.neutral.s250;
    };

    switch (type) {
        case "breakfast":
            return (
                <Pressable onPress={onPress}>
                    <View style={styles.option}>
                        <BreakfastIcon fill={handleSelectionColor()} />
                        <Text style={[styles.label, { color: handleSelectionColor() }]}>
                            Desjejum
                        </Text>
                    </View>
                </Pressable>
            );
        case "lunch":
            return (
                <Pressable onPress={onPress}>
                    <View style={styles.option}>
                        <LunchIcon fill={handleSelectionColor()} />
                        <Text style={[styles.label, { color: handleSelectionColor() }]}>
                            Almoço
                        </Text>
                    </View>
                </Pressable>
            );
        case "dinner":
            return (
                <Pressable onPress={onPress}>
                    <View style={styles.option}>
                        <DinnerIcon fill={handleSelectionColor()} />
                        <Text style={[styles.label, { color: handleSelectionColor() }]}>
                            Jantar
                        </Text>
                    </View>
                </Pressable>
            );
        default:
            return (
                <Pressable onPress={onPress}>
                    <View style={styles.option}>
                        <BreakfastIcon color={handleSelectionColor()} />
                        <Text style={[styles.label, { color: handleSelectionColor() }]}>
                            Desjejum
                        </Text>
                    </View>
                </Pressable>
            );
    }
}
