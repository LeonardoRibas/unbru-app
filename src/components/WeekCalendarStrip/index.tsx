import styles from "./styles";
import React, { useContext, useEffect, useState } from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import api from "../../services/api";
import { getShortDayOfWeek } from "../../utils/date";
import { DayIndexContext } from "../../context/DayIndexContext";

export default function WeekCalendarStrip(): React.ReactElement {
    const [weekMenu, setWeekMenu] = useState([]);
    const { dayIndex, setDayIndex } = useContext(DayIndexContext);

    useEffect(() => {
        api.get("/menu").then((res) => {
            setWeekMenu(res.data);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Maio</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                {weekMenu.map((day: DayMenu, index) => (
                    <TouchableOpacity
                        key={day.date}
                        style={styles.dayWrapper}
                        onPress={() => setDayIndex(index)}
                    >
                        <Text style={styles.weekDayTitle}>{getShortDayOfWeek(day.date)}</Text>
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
                                {new Date(day.date).getDate()}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}
