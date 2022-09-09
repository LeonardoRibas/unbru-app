import React, { useCallback, useState } from "react";
import { Dimensions, View } from "react-native";
import PagerView, { PagerViewOnPageSelectedEvent } from "react-native-pager-view";
import styles from "./styles";

import MainDish from "../MainDishItem";

type MainDishCarouselProps = {
    items: [string, string][];
};

export default function MainDishCarousel({ items }: MainDishCarouselProps): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollHandler = useCallback((event: PagerViewOnPageSelectedEvent) => {
        setActiveIndex(event.nativeEvent.position);
    }, []);

    return (
        <>
            <PagerView
                style={{ flex: 1, height: 180, width: Dimensions.get("window").width }}
                initialPage={0}
                overScrollMode="auto"
                overdrag
                onPageSelected={scrollHandler}
            >
                {items.map((item) => (
                    <MainDish label={item[0]} dish={item[1]} key={item[0]} />
                ))}
            </PagerView>

            <View style={styles.pagination}>
                {items.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.circle,
                            {
                                backgroundColor: index === activeIndex ? "#000" : "#0004",
                            },
                        ]}
                    />
                ))}
            </View>
        </>
    );
}
