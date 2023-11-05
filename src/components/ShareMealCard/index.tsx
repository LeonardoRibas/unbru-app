import React, { forwardRef } from "react";
import { View, Text } from "react-native";
import styles from "./style";

import ViewShot from "react-native-view-shot";
import useAppSelector from "src/hooks/useAppSelector";
import { getFormatedDate } from "src/utils/date";
import DishItem from "src/components/DishItem";
import { LogoType } from "assets/logotype";

type ShareMealCardProps = {
    mealType: "Desjejum" | "Almoço" | "Jantar";
    main: [string, string][];
};

const ShareMealCard = forwardRef<ViewShot, ShareMealCardProps>((props, ref): React.ReactElement => {
    const dayIndex = useAppSelector((state) => state.dayIndex);

    return (
        <ViewShot ref={ref} style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{getFormatedDate(dayIndex)}</Text>
            </View>
            <View style={styles.subHeaderContainer}>
                <Text style={styles.subtitle}>{props.mealType}</Text>
            </View>
            <View>
                {props.main.map((item) => (
                    <DishItem label={item[0]} dish={item[1]} key={item[0]} />
                ))}
            </View>
            <View style={styles.logotypeContainer}>
                <LogoType />
            </View>
        </ViewShot>
    );
});

export default ShareMealCard;
