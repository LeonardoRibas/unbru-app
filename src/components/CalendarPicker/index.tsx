import styles from "./styles";
import React, { useContext } from "react";
import { DayIndexContext } from "../../context/DayIndexContext";
import { getWeekDay, getMonthsFromWeek } from "../../utils/date";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function CalendarPicker(): React.ReactElement {
    const { menu, dayIndex, setDayIndex } = useContext(DayIndexContext);

    return (
        <View style={styles.container}>
            <View style={styles.handle} />
            <Text style={styles.title}>{getMonthsFromWeek(menu)}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                fadingEdgeLength={10}
            >
                {menu &&
                    Object.keys(menu).map((date: string) => (
                        <TouchableOpacity
                            key={date}
                            style={styles.dayWrapper}
                            onPress={() => setDayIndex(date)}
                        >
                            <Text style={styles.weekDayTitle}>{getWeekDay(date).slice(0, 3)}</Text>
                            <View
                                style={
                                    dayIndex === date
                                        ? styles.selectedDayButtonContainer
                                        : styles.dayButtonContainer
                                }
                            >
                                <Text
                                    style={
                                        dayIndex === date
                                            ? styles.selectedDayButtonText
                                            : styles.dayButtonText
                                    }
                                >
                                    {date.slice(8)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
        </View>
    );
}
