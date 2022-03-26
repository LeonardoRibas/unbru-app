import styles from "./styles";
import React, { useEffect, useState } from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import api from "../../services/api";
import { getDayOfWeek } from "../../utils/date";
import { DayIndexContext } from "../../navigators/HomeStackNavigator";

type WeekCalendarStripProps = {
    date: Date;
};

export default function WeekCalendarStrip({ date }: WeekCalendarStripProps): React.ReactElement {
    const [weekMenu, setWeekMenu] = useState([]);

    useEffect(() => {
        api.get("/menu").then((res) => {
            setWeekMenu(res.data);
        });
    }, []);

    return (
        <DayIndexContext.Consumer>
            {({ dayIndex, setDayIndex }) => (
                <View style={styles.container}>
                    <Text style={styles.title}>Outubro</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        fadingEdgeLength={10}
                    >
                        {weekMenu.map((day: TDayMenu, index) => (
                            <TouchableOpacity
                                key={day.date}
                                style={styles.dayWrapper}
                                onPress={() => setDayIndex(index)}
                            >
                                <Text style={styles.weekDayTitle}>{getDayOfWeek(day.date)}</Text>
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
                    </ScrollView>
                </View>
            )}
        </DayIndexContext.Consumer>
    );
}
