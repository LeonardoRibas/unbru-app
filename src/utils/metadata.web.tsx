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

export const getIconByLabel = (label: string, size = 40) => {
    const normalizedLabel = label.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const key = closest(normalizedLabel, labelList);

    switch (key) {
        case "Prato principal padrão":
            return <img src={Padrao} style={{ width: size, height: size }} />;
        case "Prato principal ovolactovegetariano":
            return <img src={Ovolactovegetariano} style={{ width: size, height: size }} />;
        case "Prato principal vegetariano estrito":
            return <img src={Vegetariano} style={{ width: size, height: size }} />;
        case "Complemento padrão":
            return <img src={Complemento} style={{ width: size, height: size }} />;
        case "Opção extra":
            return <img src={OpçãoExtra} style={{ width: size, height: size }} />;
        case "Salada 1":
            return <img src={Salada1} style={{ width: size, height: size }} />;
        case "Salada 2":
            return <img src={Salada2} style={{ width: size, height: size }} />;
        case "Molho para salada":
            return <img src={Molho} style={{ width: size, height: size }} />;
        case "Guarnição":
            return <img src={Guarnicao} style={{ width: size, height: size }} />;
        case "Acompanhamentos":
            return <img src={Acompanhamento} style={{ width: size, height: size }} />;
        case "Sobremesa":
            return <img src={Sobremesa} style={{ width: size, height: size }} />;
        case "Bebidas":
            return <img src={Bebidas} style={{ width: size, height: size }} />;
        case "Bebida (refresco de)":
            return <img src={Refresco} style={{ width: size, height: size }} />;
        case "Panificação":
            return <img src={Panificacao} style={{ width: size, height: size }} />;
        case "Fruta":
            return <img src={Fruta} style={{ width: size, height: size }} />;
        case "Sopa":
            return <img src={Sopa} style={{ width: size, height: size }} />;
        case "Gordura":
            return <img src={Gordura} style={{ width: size, height: size }} />;
        case "Torrada":
            return <img src={Torrada} style={{ width: size, height: size }} />;
        default:
            return null;
    }
};
