import React, { useMemo } from "react";
import { Sizing } from "../../styles";
import MainDish from "../MainDishItem";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import { isOvolacto } from "../../redux/features/isOvolactoSlice";
import { isVegan } from "../../redux/features/isVeganSlice";

type MainDishCarouselProps = {
    items: [string, string][];
};

export default function MainDishCarousel({ items }: MainDishCarouselProps): JSX.Element {
    const vegan = useSelector(isVegan);
    const ovolacto = useSelector(isOvolacto);

    const parsedItems = useMemo(() => {
        let selectedItems = [];
        if (vegan) {
            selectedItems.push(items[2]);
        }
        if (ovolacto) {
            selectedItems.push(items[1]);
        }
        if (!vegan && !ovolacto) {
            selectedItems = items;
        }

        return selectedItems;
    }, [vegan, ovolacto, items]);

    return (
        <View>
            <FlatList
                contentContainerStyle={{
                    paddingHorizontal: 12,
                    alignItems: "flex-start",
                }}
                scrollEnabled
                data={parsedItems}
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
                renderItem={({ item }) => (
                    <MainDish
                        label={item[0]}
                        dish={item[1]}
                        key={item[0]}
                        oneOption={(vegan && !ovolacto) || (ovolacto && !vegan)}
                    />
                )}
                onTouchStart={(event) => event.stopPropagation()}
            />
        </View>
    );
}
