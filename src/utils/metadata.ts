import { ImageSourcePropType } from "react-native";
import { closest } from "./dist";

type Meta = {
    displayName: string;
    emoji: ImageSourcePropType;
    color: string;
};

const metadata = {
    salada1: {
        displayName: "Salada",
        emoji: require("../../assets/emojis/salada1.png"),
        color: "#4CAF5030",
    },
    salada2: {
        displayName: "Salada",
        emoji: require("../../assets/emojis/salada2.png"),
        color: "#4CAF5030",
    },
    "molho sal": {
        displayName: "Molho",
        emoji: require("../../assets/emojis/molho.png"),
        color: "#FF210030",
    },
    padrao: {
        displayName: "Padrão",
        emoji: require("../../assets/emojis/pprincipal.png"),
        color: "#FDDDE0",
    },
    vegetariano: {
        displayName: "Vegetariano",
        emoji: require("../../assets/emojis/vegetariano.png"),
        color: "#E3F5D9",
    },
    vegano: {
        displayName: "Vegano",
        emoji: require("../../assets/emojis/vegetariano.png"),
        color: "#4CAF5030",
    },
    ovolactovegetariano: {
        displayName: "Ovolactovegetariano",
        emoji: require("../../assets/emojis/ovolacto.png"),
        color: "#FFEBCF",
    },
    "vegetariano estrito": {
        displayName: "Vegetariano estrito",
        emoji: require("../../assets/emojis/vegetariano.png"),
        color: "#8BC34A30",
    },
    guarnicao: {
        displayName: "Guarnição",
        emoji: require("../../assets/emojis/guarnicao.png"),
        color: "#FF980030",
    },
    acompanhamento: {
        displayName: "Acompanhamento",
        emoji: require("../../assets/emojis/acompanhamentos.png"),
        color: "#FF980030",
    },
    sobremesa: {
        displayName: "Sobremesa",
        emoji: require("../../assets/emojis/sobremesa.png"),
        color: "#2196F330",
    },
    suco: {
        displayName: "Suco",
        emoji: require("../../assets/emojis/refresco.png"),
        color: "#8BC34A30",
    },
    bebidas: {
        displayName: "Bebidas",
        emoji: require("../../assets/emojis/bebidas.png"),
        color: "#4CAF5030",
    },
    panificacao: {
        displayName: "Panificação",
        emoji: require("../../assets/emojis/panificacao.png"),
        color: "#FF980030",
    },
    fruta: {
        displayName: "Fruta",
        emoji: require("../../assets/emojis/fruta.png"),
        color: "#2196F330",
    },
    sopa: {
        displayName: "Sopa",
        emoji: require("../../assets/emojis/sopa.png"),
        color: "#8BC34A30",
    },
    gordura: {
        displayName: "Gordura",
        emoji: require("../../assets/emojis/gordura.png"),
        color: "#4CAF5030",
    },
    torrada: {
        displayName: "Torrada",
        emoji: require("../../assets/emojis/panificacao.png"),
        color: "#FF980030",
    },
};

export function getMetadata(label: string): Meta {
    const normalizedLabel = label.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const key = closest(normalizedLabel, Object.keys(metadata)) as keyof typeof metadata;
    return metadata[key];
}
