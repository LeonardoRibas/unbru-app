import React, { createContext } from "react";

interface IDayIndexContext {
    menu: WeekMenu;
    setMenu: React.Dispatch<React.SetStateAction<WeekMenu>>;
    dayIndex: string;
    setDayIndex: React.Dispatch<React.SetStateAction<string>>;
}

type DayIndexContextProps = {
    value: IDayIndexContext;
    children: React.ReactNode;
};

export const DayIndexContext = createContext<IDayIndexContext>({
    menu: [],
    setMenu: () => null,
    dayIndex: "",
    setDayIndex: () => null,
});

export default function DayIndexContextProvider({
    value,
    children,
}: DayIndexContextProps): React.ReactElement {
    return <DayIndexContext.Provider value={value}>{children}</DayIndexContext.Provider>;
}
