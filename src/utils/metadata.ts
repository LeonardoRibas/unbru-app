import { ImageSourcePropType } from "react-native";
import { closest } from "./dist";

type Meta = {
    displayName: string;
    emoji: ImageSourcePropType;
};

const metadata = {
    salada1: {
        displayName: "Salada 1",
        emoji: require("../../assets/emojis/salada1.png"),
    },
    salada2: {
        displayName: "Salada 2",
        emoji: require("../../assets/emojis/salada2.png"),
    },
    "molho sal": {
        displayName: "Molho",
        emoji: require("../../assets/emojis/molho.png"),
    },
    padrao: {
        displayName: "Prato Padrão",
        emoji: require("../../assets/emojis/pprincipal.png"),
    },
    vegetariano: {
        displayName: "Prato Vegetariano",
        emoji: require("../../assets/emojis/vegetariano.png"),
    },
    vegano: {
        displayName: "Vegano",
        emoji: require("../../assets/emojis/vegetariano.png"),
    },
    ovolactovegetariano: {
        displayName: "Prato Ovolactovegetariano",
        emoji: require("../../assets/emojis/ovolacto.png"),
    },
    "vegetariano estrito": {
        displayName: "Prato Vegetariano",
        emoji: require("../../assets/emojis/vegetariano.png"),
    },
    guarnicao: {
        displayName: "Guarnição",
        emoji: require("../../assets/emojis/guarnicao.png"),
    },
    acompanhamento: {
        displayName: "Acompanhamentos",
        emoji: require("../../assets/emojis/acompanhamentos.png"),
    },
    sobremesa: {
        displayName: "Sobremesa",
        emoji: require("../../assets/emojis/sobremesa.png"),
    },
    refresco: {
        displayName: "Suco",
        emoji: require("../../assets/emojis/refresco.png"),
    },
    bebidas: {
        displayName: "Bebidas",
        emoji: require("../../assets/emojis/bebidas.png"),
    },
    panificacao: {
        displayName: "Panificação",
        emoji: require("../../assets/emojis/panificacao.png"),
    },
    fruta: {
        displayName: "Fruta",
        emoji: require("../../assets/emojis/fruta.png"),
    },
    sopa: {
        displayName: "Sopa",
        emoji: require("../../assets/emojis/sopa.png"),
    },
    gordura: {
        displayName: "Gordura",
        emoji: require("../../assets/emojis/gordura.png"),
    },
    torrada: {
        displayName: "Torrada",
        emoji: require("../../assets/emojis/panificacao.png"),
    },
};

export function getMetadata(label: string): Meta {
    const normalizedLabel = label.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const key = closest(normalizedLabel, Object.keys(metadata)) as keyof typeof metadata;
    return metadata[key];
}
