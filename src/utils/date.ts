const weekDays = {
    0: "Domingo",
    1: "Segunda",
    2: "Terça",
    3: "Quarta",
    4: "Quinta",
    5: "Sexta",
    6: "Sábado",
};

const getDayOfWeek = (date: string): string => {
    const dayNumber = new Date(date).getDay();
    return weekDays[dayNumber];
};

export default getDayOfWeek;
