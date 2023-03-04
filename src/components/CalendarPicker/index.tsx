import styles from "./styles";
import { Colors } from "../../styles";
import { Sizing } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import React, { useRef, useContext, useEffect } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import { getWeekDay, getMonthsFromWeek } from "../../utils/date";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { selectDayIndex, setDayIndex } from "../../redux/features/dayIndexSlice";

export default function CalendarPicker(): React.ReactElement {
    const insets = useSafeAreaInsets();
    const { setIsCalendarModalOpen } = useContext(GeneralContext);
    const menu = useSelector((state) => state.menu.value);
    const scrollRef = useRef<ScrollView>();

    const dayIndex = useSelector(selectDayIndex);
    const dispatch = useDispatch();

    useEffect(() => {
        const selectedDayIndex = Object.keys(menu).indexOf(dayIndex);
        scrollRef.current?.scrollTo({
            x: 56 * selectedDayIndex - Sizing.screen.width / 2 + 50,
            y: 0,
            animated: true,
        });
    }, [dayIndex]);

    return (
        <View
            style={{
                paddingBottom: insets.bottom,
                backgroundColor: Colors.neutral.white,
                borderTopStartRadius: Sizing.layout.x20,
                borderTopEndRadius: Sizing.layout.x20,
            }}
        >
            <View style={styles.container}>
                <View style={styles.handle} />
                <Text style={styles.title}>{getMonthsFromWeek(menu)}</Text>
                <ScrollView
                    ref={scrollRef}
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
                                onPress={() => {
                                    dispatch(setDayIndex(date));
                                    setTimeout(() => setIsCalendarModalOpen(false), 400);
                                }}
                            >
                                <Text style={styles.weekDayTitle}>
                                    {getWeekDay(date).slice(0, 3)}
                                </Text>
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
        </View>
    );
}
