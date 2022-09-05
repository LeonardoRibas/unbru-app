import { closest } from "./dist";

const emojis = {
    salada: "🥗",
    molho: "",
    padrao: "🍗",
    vegetariano: "🌱",
    vegano: "🌱",
    ovolactovegetariano: "🥚",
    "vegetariano estrito": "🌱",
    guarnicao: "🥔",
    acompanhamento: "🍞",
    sobremesa: "🍮",
    suco: "🥤",
    bebidas: "🍹",
    panificacao: "🍞",
    fruta: "🍎",
    sopa: "🍲",
    gordura: "🥜",
};

export function getEmoji(label: string): string {
    const normalizedLabel = label.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const key = closest(normalizedLabel, Object.keys(emojis)) as keyof typeof emojis;
    return emojis[key];
}
