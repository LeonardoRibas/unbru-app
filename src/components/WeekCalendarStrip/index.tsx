import styles from "./styles";
import React, { useContext } from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { getWeekDay, getMonthsFromWeek } from "../../utils/date";
import { DayIndexContext } from "../../context/DayIndexContext";

export default function WeekCalendarStrip(): React.ReactElement {
    const { menu, dayIndex, setDayIndex } = useContext(DayIndexContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{getMonthsFromWeek(menu)}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                fadingEdgeLength={10}
            >
                {menu &&
                    menu.map((day: DayMenu, index: number) => (
                        <TouchableOpacity
                            key={day.id}
                            style={styles.dayWrapper}
                            onPress={() => setDayIndex(index)}
                        >
                            <Text style={styles.weekDayTitle}>
                                {getWeekDay(day.date).slice(0, 3)}
                            </Text>
                            <View
                                style={
                                    dayIndex === index
                                        ? styles.selectedDayButtonContainer
                                        : styles.dayButtonContainer
                                }
                            >
                                <Text
                                    style={
                                        dayIndex === index
                                            ? styles.selectedDayButtonText
                                            : styles.dayButtonText
                                    }
                                >
                                    {day.date.slice(8)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
        </View>
    );
}
