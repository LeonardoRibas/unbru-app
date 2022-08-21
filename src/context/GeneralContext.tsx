import React, { createContext } from "react";

interface IGeneralContext {
    menu: WeekMenu;
    setMenu: React.Dispatch<React.SetStateAction<WeekMenu>>;
    dayIndex: string;
    setDayIndex: React.Dispatch<React.SetStateAction<string>>;
    isCalendarModalOpen: boolean;
    setIsCalendarModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isFirstLaunch: boolean;
}

type GeneralContextProps = {
    value: IGeneralContext;
    children: React.ReactNode;
};

export const GeneralContext = createContext<IGeneralContext>({
    menu: [],
    setMenu: () => null,
    dayIndex: "",
    setDayIndex: () => null,
    isCalendarModalOpen: false,
    setIsCalendarModalOpen: () => null,
    isFirstLaunch: false,
});

export default function GeneralContextProvider({
    value,
    children,
}: GeneralContextProps): React.ReactElement {
    return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>;
}
