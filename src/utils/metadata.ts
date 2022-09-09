import { closest } from "./dist";

type Meta = {
    displayName: string;
    emoji: string;
    color: string;
};

const metadata = {
    salada: {
        displayName: "Salada",
        emoji: "🥗",
        color: "#4CAF5030",
    },
    "molho sal": {
        displayName: "Molho",
        emoji: "🧂",
        color: "#FF210030",
    },
    padrao: {
        displayName: "Padrão",
        emoji: "🍗",
        color: "#F4000F30",
    },
    vegetariano: {
        displayName: "Vegetariano",
        emoji: "🥦",
        color: "#8BC34A30",
    },
    vegano: {
        displayName: "Vegano",
        emoji: "🥦",
        color: "#4CAF5030",
    },
    ovolactovegetariano: {
        displayName: "Ovolactovegetariano",
        emoji: "🥚",
        color: "#FF980030",
    },
    "vegetariano estrito": {
        displayName: "Vegetariano estrito",
        emoji: "🥦",
        color: "#8BC34A30",
    },
    guarnicao: {
        displayName: "Guarnição",
        emoji: "🍝",
        color: "#FF980030",
    },
    acompanhamento: {
        displayName: "Acompanhamento",
        emoji: "🍛",
        color: "#FF980030",
    },
    sobremesa: {
        displayName: "Sobremesa",
        emoji: "🍰",
        color: "#2196F330",
    },
    suco: {
        displayName: "Suco",
        emoji: "🥤",
        color: "#8BC34A30",
    },
    bebidas: {
        displayName: "Bebidas",
        emoji: "🍹",
        color: "#4CAF5030",
    },
    panificacao: {
        displayName: "Panificação",
        emoji: "🍞",
        color: "#FF980030",
    },
    fruta: {
        displayName: "Fruta",
        emoji: "🍎",
        color: "#2196F330",
    },
    sopa: {
        displayName: "Sopa",
        emoji: "🍲",
        color: "#8BC34A30",
    },
    gordura: {
        displayName: "Gordura",
        emoji: "🧈",
        color: "#4CAF5030",
    },
};

export function getMetadata(label: string): Meta {
    const normalizedLabel = label.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const key = closest(normalizedLabel, Object.keys(metadata)) as keyof typeof metadata;
    return metadata[key];
}
