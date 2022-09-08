import React from "react";
import { Dimensions, View, FlatList } from "react-native";

import MainDish from "../MainDishItem";

type MainDishCarouselProps = {
    items: [string, string][];
};

export default function MainDishCarousel({ items }: MainDishCarouselProps): JSX.Element {
    const width = Dimensions.get("window").width;
    return (
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
        />
    );
}
