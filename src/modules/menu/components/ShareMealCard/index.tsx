import React, { forwardRef } from "react";
import { View, Text } from "react-native";
import styles from "./style";

import ViewShot from "react-native-view-shot";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import { getFormatedDate } from "@modules/common/utils/date";
import DishItem from "@modules/menu/components/DishItem";
import { LogoType } from "assets/logotype";
import { Theme } from "@modules/common/styles";

type ShareMealCardProps = {
    mealType: "Desjejum" | "Almoço" | "Jantar";
    main: [string, string][];
};

const ShareMealCard = forwardRef<ViewShot, ShareMealCardProps>((props, ref): React.ReactElement => {
    const theme = useAppSelector((state) => state.theme);
    const dayIndex = useAppSelector((state) => state.dayIndex);

    return (
        <ViewShot
            ref={ref}
            style={[styles.container, { backgroundColor: Theme[theme].background_default }]}
        >
            <View
                style={[
                    styles.headerContainer,
                    { backgroundColor: Theme[theme].background_default },
                ]}
            >
                <Text style={styles.title}>{getFormatedDate(dayIndex)}</Text>
            </View>
            <View
                style={[
                    styles.subHeaderContainer,
                    { backgroundColor: Theme[theme].background_default },
                ]}
            >
                <Text style={[styles.subtitle, { color: Theme[theme].text_default }]}>
                    {props.mealType}
                </Text>
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
