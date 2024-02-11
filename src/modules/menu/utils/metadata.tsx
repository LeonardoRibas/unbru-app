import React from "react";
import { closest } from "./dist";

import Padrao from "assets/icons/fluent-emoji_poultry-leg.svg";
import Ovolactovegetariano from "assets/icons/fluent-emoji_egg.svg";
import Vegetariano from "assets/icons/fluent-emoji_broccoli.svg";
import Complemento from "assets/icons/fluent-emoji_pancakes.svg";
import OpçãoExtra from "assets/icons/fluent-emoji_waffle.svg";
import Salada1 from "assets/icons/fluent-emoji_leafy-green.svg";
import Salada2 from "assets/icons/fluent-emoji_tomato.svg";
import Molho from "assets/icons/fluent-emoji_salt.svg";
import Guarnicao from "assets/icons/fluent-emoji_spaghetti.svg";
import Acompanhamento from "assets/icons/fluent-emoji_curry-rice.svg";
import Sobremesa from "assets/icons/fluent-emoji_cupcake.svg";
import Refresco from "assets/icons/fluent-emoji_cup-with-straw.svg";
import Bebidas from "assets/icons/fluent-emoji_hot-beverage.svg";
import Panificacao from "assets/icons/fluent-emoji_bread.svg";
import Fruta from "assets/icons/fluent-emoji_watermelon.svg";
import Sopa from "assets/icons/fluent-emoji_pot-of-food.svg";
import Gordura from "assets/icons/fluent-emoji_butter.svg";
import Torrada from "assets/icons/fluent-emoji_bread.svg";

const labelList = [
    "Prato principal padrão",
    "Prato principal ovolactovegetariano",
    "Prato principal vegetariano estrito",
    "Complemento padrão",
    "Opção extra",
    "Salada 1",
    "Salada 2",
    "Molho para salada",
    "Guarnição",
    "Acompanhamentos",
    "Sobremesa",
    "Bebida (refresco de)",
    "Bebidas",
    "Panificação",
    "Fruta",
    "Sopa",
    "Gordura",
    "Torrada",
];

export const getIconByLabel = (label: string, size = 40): React.ReactElement | null => {
    const normalizedLabel = label.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const key = closest(normalizedLabel, labelList);

    switch (key) {
        case "Prato principal padrão":
            return <Padrao width={size} height={size} />;
        case "Prato principal ovolactovegetariano":
            return <Ovolactovegetariano width={size} height={size} />;
        case "Prato principal vegetariano estrito":
            return <Vegetariano width={size} height={size} />;
        case "Complemento padrão":
            return <Complemento width={size} height={size} />;
        case "Opção extra":
            return <OpçãoExtra width={size} height={size} />;
        case "Salada 1":
            return <Salada1 width={size} height={size} />;
        case "Salada 2":
            return <Salada2 width={size} height={size} />;
        case "Molho para salada":
            return <Molho width={size} height={size} />;
        case "Guarnição":
            return <Guarnicao width={size} height={size} />;
        case "Acompanhamentos":
            return <Acompanhamento width={size} height={size} />;
        case "Sobremesa":
            return <Sobremesa width={size} height={size} />;
        case "Bebidas":
            return <Bebidas width={size} height={size} />;
        case "Bebida (refresco de)":
            return <Refresco width={size} height={size} />;
        case "Panificação":
            return <Panificacao width={size} height={size} />;
        case "Fruta":
            return <Fruta width={size} height={size} />;
        case "Sopa":
            return <Sopa width={size} height={size} />;
        case "Gordura":
            return <Gordura width={size} height={size} />;
        case "Torrada":
            return <Torrada width={size} height={size} />;
        default:
            return null;
    }
};
