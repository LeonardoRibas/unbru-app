import React, { useCallback, useState } from "react";
import { Dimensions, View, FlatList } from "react-native";
import styles from "./styles";

import MainDish from "../MainDishItem";

type MainDishCarouselProps = {
    items: [string, string][];
};

export default function MainDishCarousel({ items }: MainDishCarouselProps): JSX.Element {
    const width = Dimensions.get("window").width;
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollHandler = useCallback((event) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const pageNum = Math.floor(contentOffset.x / layoutMeasurement.width);
        setActiveIndex(pageNum);
    }, []);

    return (
        <>
            <FlatList
                data={items}
                renderItem={({ item }) => <MainDish label={item[0]} dish={item[1]} />}
                keyExtractor={(item) => item[0]}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment="start"
                snapToInterval={width}
                pagingEnabled
                CellRendererComponent={({ index, children, style, ...props }) => (
                    <View style={[style, { flex: 1 }]} index={index} {...props}>
                        {children}
                    </View>
                )}
                // prevent from triggering Tab View's swipe gesture
                onTouchStart={(event) => event.stopPropagation()}
                onScroll={scrollHandler}
            />
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
