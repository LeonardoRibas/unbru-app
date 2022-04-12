import React, { createContext } from "react";

interface IDayIndexContext {
    dayIndex: number;
    setDayIndex: React.Dispatch<React.SetStateAction<number>> | undefined;
}

type DayIndexContextProps = {
    value: IDayIndexContext;
    children: React.ReactNode;
};

export const DayIndexContext = createContext<IDayIndexContext>({
    dayIndex: 0,
    setDayIndex: undefined,
});

export default function DayIndexContextProvider({
    value,
    children,
}: DayIndexContextProps): React.ReactElement {
    return <DayIndexContext.Provider value={value}>{children}</DayIndexContext.Provider>;
}
