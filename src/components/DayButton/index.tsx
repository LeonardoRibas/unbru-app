import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

import useAppDispatch from "src/hooks/useAppDispatch";
import useAppSelector from "src/hooks/useAppSelector";
import { setDayIndex } from "src/redux/features/dayIndexSlice";
import { getWeekDay } from "src/utils/date";
import { useNavigation } from "@react-navigation/native";

type DayButtonProps = {
    date: string;
};

const DayButton = ({ date }: DayButtonProps): React.ReactElement => {
    const dispatch = useAppDispatch();
    const dayIndex = useAppSelector((state) => state.dayIndex);
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            key={date}
            style={styles.container}
            onPress={() => {
                dispatch(setDayIndex(date));
                setTimeout(() => navigation.goBack(), 400);
            }}
        >
            <Text style={styles.title}>{getWeekDay(date).slice(0, 3)}</Text>
            <View
                style={
                    dayIndex === date
                        ? styles.selectedDayButtonContainer
                        : styles.dayButtonContainer
                }
            >
                <Text
                    style={dayIndex === date ? styles.selectedDayButtonText : styles.dayButtonText}
                >
                    {date.slice(8)}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default DayButton;
