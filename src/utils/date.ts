const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export const getDayOfWeek = (date: string): string => {
    const dayNumber = new Date(date).getDay();
    return weekDays[dayNumber];
};

export default getDayOfWeek;
