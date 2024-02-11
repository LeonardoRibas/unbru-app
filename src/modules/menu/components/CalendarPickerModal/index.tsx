import React, { useRef, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { Sizing } from "src/styles";
import styles from "./styles";

import Modal from "react-native-modal";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import { getMonthsFromWeek } from "@modules/common/utils/date";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DayButton from "@modules/menu/components/DayButton";
import { useNavigation } from "@react-navigation/native";
import { Theme } from "src/styles";

export default function CalendarPickerModal(): React.ReactElement {
    const insets = useSafeAreaInsets();
    const menu = useAppSelector((state) => state.menu);
    const dayIndex = useAppSelector((state) => state.dayIndex);
    const navigation = useNavigation();
    const scrollRef = useRef<ScrollView>(null);
    const theme = useAppSelector((state) => state.theme);

    useEffect(() => {
        const selectedDayIndex = Object.keys(menu).indexOf(dayIndex);
        scrollRef?.current?.scrollTo({
            x: 56 * selectedDayIndex - Sizing.screen.width / 2 + 50,
            y: 0,
            animated: true,
        });
    }, [dayIndex]);

    return (
        <Modal
            isVisible={true}
            onBackdropPress={() => navigation.goBack()}
            onSwipeComplete={() => navigation.goBack()}
            swipeDirection="down"
            hideModalContentWhileAnimating
            useNativeDriverForBackdrop
            statusBarTranslucent
            scrollHorizontal
            propagateSwipe
            backdropOpacity={0.5}
            style={{ justifyContent: "flex-end", margin: 0 }}
        >
            <View
                style={[
                    styles.container,
                    {
                        paddingBottom: insets.bottom,
                    },
                ]}
            >
                <View
                    style={[styles.wrapper, { backgroundColor: Theme[theme].background_default }]}
                >
                    <View
                        style={[styles.handle, { backgroundColor: Theme[theme].text_secondary }]}
                    />
                    <Text style={[styles.title, { color: Theme[theme].text_primary }]}>
                        {getMonthsFromWeek(menu)}
                    </Text>
                    <ScrollView
                        ref={scrollRef}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        fadingEdgeLength={10}
                    >
                        {menu &&
                            Object.keys(menu).map((date: string) => (
                                <DayButton key={date} date={date} />
                            ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}
