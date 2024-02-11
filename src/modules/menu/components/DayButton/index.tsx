import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

import useAppDispatch from "@modules/common/hooks/useAppDispatch";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import { setDayIndex } from "src/redux/features/dayIndexSlice";
import { getWeekDay } from "@modules/common/utils/date";
import { useNavigation } from "@react-navigation/native";
import { Theme } from "src/styles";

type DayButtonProps = {
    date: string;
};

const DayButton = ({ date }: DayButtonProps): React.ReactElement => {
    const dispatch = useAppDispatch();
    const dayIndex = useAppSelector((state) => state.dayIndex);
    const navigation = useNavigation();
    const theme = useAppSelector((state) => state.theme);

    return (
        <TouchableOpacity
            key={date}
            style={styles.container}
            onPress={() => {
                dispatch(setDayIndex(date));
                setTimeout(() => navigation.goBack(), 400);
            }}
        >
            <Text style={[styles.title, { color: Theme[theme].text_secondary }]}>
                {getWeekDay(date).slice(0, 3)}
            </Text>
            <View
                style={
                    dayIndex === date
                        ? styles.selectedDayButtonContainer
                        : [
                              styles.dayButtonContainer,
                              { backgroundColor: Theme[theme].background_default },
                          ]
                }
            >
                <Text
                    style={
                        dayIndex === date
                            ? styles.selectedDayButtonText
                            : [styles.dayButtonText, { color: Theme[theme].text_primary }]
                    }
                >
                    {date.slice(8)}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default DayButton;
