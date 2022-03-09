const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export const getDayOfWeek = (date: string): string => {
    const dayNumber = new Date(date).getDay();
    return weekDays[dayNumber];
};

export const getFormatedDate = (date: string): string => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.getMonth();
    return `${getDayOfWeek(date)} ${("0" + day).slice(-2)}/${("0" + (month + 1)).slice(-2)}`;
};
