import styles from "./style";
import * as Sharing from "expo-sharing";
import { useSelector } from "react-redux";
import ViewShot from "react-native-view-shot";
import { View, Text, Image } from "react-native";
import { partition } from "../../utils/partition";
import { getMetadata } from "../../utils/metadata";
import { getFormatedDate } from "../../utils/date";
import React, { useCallback, useMemo, useRef } from "react";
import { useNavigationState } from "@react-navigation/native";

type DishProps = {
    label: string;
    dish: string;
};

function Dish({ label, dish }: DishProps) {
    const { displayName, emoji } = getMetadata(label);
    return (
        <View style={styles.dishContainer}>
            <Image style={styles.emoji} source={emoji} />
            <View>
                <Text style={styles.label}>{displayName}</Text>
                <Text style={styles.dish}>{dish}</Text>
            </View>
        </View>
    );
}

export default function ShareMealCard(): React.ReactElement {
    const ref = useRef();
    const menu = useSelector((state) => state.menu);
    const dayIndex = useSelector((state) => state.dayIndex);
    const index = useNavigationState((state) => state.index);
    const routeNames = useNavigationState((state) => state.routeNames);

    const dayMenu = menu[dayIndex][index === 1 ? "almoco" : routeNames[index].toLowerCase()];

    const onCapture = useCallback(async (uri: string) => {
        const isSharingAvailable = await Sharing.isAvailableAsync();
        if (isSharingAvailable) {
            Sharing.shareAsync(uri, { dialogTitle: `Compartilhar ${routeNames[index]}` });
        }
    }, []);

    const [items, extras] = useMemo(
        () =>
            partition(
                Object.entries(dayMenu).filter(([, value]) => value !== ""),
                ([key]) => key.includes("principal") || key.includes("Complemento")
            ),
        [dayMenu]
    );

    return (
        <ViewShot style={styles.container} onCapture={onCapture} captureMode="mount">
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{getFormatedDate(dayIndex)}</Text>
            </View>
            <View style={styles.subHeaderContainer}>
                <Text style={styles.subtitle}>{routeNames[index]}</Text>
            </View>
            {items.map((item) => (
                <Dish label={item[0]} dish={item[1]} key={item[0]} />
            ))}
        </ViewShot>
    );
}
