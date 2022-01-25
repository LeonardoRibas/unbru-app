import styles from "./styles";
import { format, getDate, getMonth, isSameDay } from "date-fns";
import React, { useEffect, useState } from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import api from "../../services/api";
import { formatRFC7231 } from "date-fns/esm";

type WeekCalendarStripProps = {
    date: Date;
};

export default function WeekCalendarStrip({ date }: WeekCalendarStripProps): React.ReactElement {
    const [week, setWeek] = useState([]);
    useEffect(() => {
        const weekDays = [];
        api.get("/week_menu").then((res) => {
            res.data.map((day, index) => {
                weekDays.push({
                    id: index,
                    date: new Date(day.date),
                    monthDay: new Date(day.date).getUTCDate(),
                    weekDay: new Date(day.date).getUTCDay(),
                });
            });
            setWeek(weekDays);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Outubro</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                fadingEdgeLength={10}
            >
                {console.log(week)}
                {week.map((weekDay) => (
                    <View key={weekDay.id} style={styles.dayWrapper}>
                        <Text style={styles.weekDayTitle}>{weekDay.weekDay}</Text>
                        <TouchableOpacity style={styles.dayButtonContainer}>
                            <Text
                                style={
                                    isSameDay(weekDay.date, date)
                                        ? styles.selectedDayButtonText
                                        : styles.dayButtonText
                                }
                            >
                                {weekDay.monthDay}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
