import styles from "./styles";
import { isSameDay, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import api from "../../services/api";
import { getDayOfWeek } from "../../utils/date";

type WeekCalendarStripProps = {
    date: Date;
};

export default function WeekCalendarStrip({ date }: WeekCalendarStripProps): React.ReactElement {
    const [weekMenu, setWeekMenu] = useState([]);

    useEffect(() => {
        api.get("/menu").then((res) => {
            setWeekMenu(res.data);
            console.log(res.data);
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
                {weekMenu.map((day: TDayMenu) => (
                    <TouchableOpacity key={day.date} style={styles.dayWrapper}>
                        <Text style={styles.weekDayTitle}>{getDayOfWeek(day.date)}</Text>
                        <View style={styles.dayButtonContainer}>
                            <Text
                                style={
                                    isSameDay(parseISO(day.date), date)
                                        ? styles.selectedDayButtonText
                                        : styles.dayButtonText
                                }
                            >
                                {new Date(day.date).getDate()}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
