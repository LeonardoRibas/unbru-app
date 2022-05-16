type WeekMenu = Daymenu[];

type DayMenu = {
    date: Date;
    breakfast: DishMenuBreakfast;
    lunch: DishMenuLunch;
    dinner: DishMenuDinner;
};

type DishMenuBreakfast = {
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

type DishMenuLunch = {
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

type DishMenuDinner = {
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
