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
