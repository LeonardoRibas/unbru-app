import React from "react";
import { View, Text } from "react-native";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import LunchIcon from "../../components/Svg/LunchIcon";
import { Colors } from "../../styles";
import BreakfastIcon from "../../components/Svg/BreakfastIcon";
import DinnerIcon from "../../components/Svg/DinnerIcon";
import styles from "./styles";

export default function BottomTab({
    state,
    descriptors,
    navigation,
    position,
}: MaterialTopTabBarProps): React.ReactElement {
    return (
        <View style={styles.container}>
            <View style={styles.option}>
                <BreakfastIcon
                    color={state.index === 0 ? Colors.primary.brand : Colors.neutral.s500}
                />
                <Text style={styles.lable}>Desjejum</Text>
            </View>
            <View style={styles.option}>
                <LunchIcon color={Colors.neutral.s500} />
                <Text style={styles.lable}>Almoço</Text>
            </View>
            <View style={styles.option}>
                <DinnerIcon color={Colors.neutral.s500} />
                <Text style={styles.lable}>Jantar</Text>
            </View>
        </View>
    );
}
