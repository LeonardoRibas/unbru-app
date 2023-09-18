import { current } from "@reduxjs/toolkit";

const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const yearMonths = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

/** Returns the week day of a date, eg "Segunda", "Terca"... */
export const getWeekDay = (date: string): string => {
    const dayNumber = new Date(
        parseInt(date.slice(0, 4)),
        parseInt(date.slice(5, 7)) - 1,
        parseInt(date.slice(8))
    );
    const result = dayNumber.getDay();
    return weekDays[result];
};

export const getFormatedDate = (date: string): string => {
    return `${getWeekDay(date)} ${date.slice(8)}/${date.slice(5, 7)}`;
};

/**Returns the month(s) of a week separated by "/"*/
export const getMonthsFromWeek = (menu: WeekMenu): string => {
    const months: string[] = [];
    Object.keys(menu).map((date: string) => {
        const newItem = date.slice(5, 7);
        months.indexOf(yearMonths[parseInt(newItem) - 1]) === -1
            ? months.push(yearMonths[parseInt(newItem) - 1])
            : null;
    });
    return months.join(" / ");
};

/**Returns the apropriate date to show the user */
export const getApropriateDate = (date = new Date()): string => {
    const currentTime = date;

    const endDinnerTime = new Date();
    endDinnerTime.setUTCHours(22, 30, 0);
    console.log(currentTime);
    console.log(endDinnerTime);

    // If the dinner ended returns tomorrow date
    if (currentTime > endDinnerTime) {
        console.log("entrou");
        currentTime.setDate(currentTime.getDate() + 1);
    }

    return currentTime.toISOString().slice(0, 10);
};

/**Returns the apropriate meal based on current time */
export const getMealByTime = (date = new Date()): string => {
    const currentTime = date;

    const endBreakfastTime = new Date();
    endBreakfastTime.setHours(9, 30, 0);

    const endLunchTime = new Date();
    endLunchTime.setHours(14, 30, 0);

    const endDinnerTime = new Date();
    endDinnerTime.setHours(19, 30, 0);

    if (currentTime > endBreakfastTime && currentTime < endLunchTime) {
        return "Almoço";
    }
    if (currentTime > endLunchTime && currentTime < endDinnerTime) {
        return "Jantar";
    }
    return "Desjejum";
};
