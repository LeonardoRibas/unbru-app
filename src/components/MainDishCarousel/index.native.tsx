import React from "react";
import { Dimensions } from "react-native";
import PagerView from "react-native-pager-view";

import MainDish from "../MainDishItem";

type MainDishCarouselProps = {
    items: [string, string][];
};

export default function MainDishCarousel({ items }: MainDishCarouselProps): JSX.Element {
    return (
        <PagerView
            style={{ flex: 1, height: 180, width: Dimensions.get("window").width }}
            initialPage={0}
            overScrollMode="auto"
            overdrag
        >
            {items.map((item) => (
                <MainDish label={item[0]} dish={item[1]} key={item[0]} />
            ))}
        </PagerView>
    );
}
