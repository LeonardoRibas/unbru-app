type WeekMenu = DayMenu[];

type Campus = "Darcy Ribeiro" | "Ceilândia" | "Gama" | "Planaltina" | "Fazenda";

type ThemeState = "light" | "dark";

type DayMenu = {
    date: string;
    desjejum: BreakfastMeal;
    almoco: LunchMeal;
    jantar: DinnerMeal;
};

type BreakfastMeal = {
    "Complemento ovolactovegetariano": string;
    "Complemento parão": string;
    "Complemento vegetariano estrito": string;
    "Composto vegetal": string;
    Fruta: string;
    Godura: string;
    Leite: string;
    "Opção extra": string;
    "Pão padrão / Ovolactovegetariano": string;
    "Pão vegetariano estrito": string;
};

type LunchMeal = {
    Acompanhamentos: string;
    Guarnição: string;
    Molho: string;
    "Prato principal ovolactovegetariano": string;
    "Prato principal padrão": string;
    "Prato principal vegetariano estrito": string;
    Refresco: string;
    "Salada 1": string;
    "Salada 2": string;
    Sobremesa: string;
};

type DinnerMeal = {
    Acompanhamentos: string;
    Molho: string;
    "Prato principal ovolactovegetariano": string;
    "Prato principal padrão": string;
    "Prato principal vegetariano estrito": string;
    Refresco: string;
    "Salada 1": string;
    "Salada 2": string;
    Sobremesa: string;
    Sopa: string;
    Torrada: string;
};

type ThemeState = "light" | "dark";

declare module "react-native-dotenv" {
    export const REACT_APP_SUPABASE_URL: string;
    export const REACT_APP_SUPABASE_ANON_KEY: string;
}
