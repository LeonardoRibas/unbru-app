import React from "react";
import { Sizing } from "../../styles";
import MainDish from "../MainDishItem";
import { FlatList, View } from "react-native";

type MainDishCarouselProps = {
    items: [string, string][];
};

export default function MainDishCarousel({ items }: MainDishCarouselProps): React.ReactElement {
    return (
        <View>
            <FlatList
                contentContainerStyle={{
                    paddingHorizontal: 12,
                    alignItems: "flex-start",
                }}
                scrollEnabled
                data={items}
                keyExtractor={(item) => item[0]}
                horizontal={Sizing.screen.width >= 768 ? false : true}
                snapToAlignment="start"
                scrollEventThrottle={16}
                decelerationRate="fast"
                bounces={false}
                snapToOffsets={[...Array(items.length)].map(
                    (x, i) =>
                        i * (Sizing.screen.width * 0.8 - Sizing.layout.x20) +
                        (i - 1) * Sizing.layout.x20
                )}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <MainDish label={item[0]} dish={item[1]} key={item[0]} />}
                onTouchStart={(event) => event.stopPropagation()}
            />
        </View>
    );
}
