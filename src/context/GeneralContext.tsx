import React, { createContext } from "react";

interface IGeneralContext {
    isCalendarModalOpen: boolean;
    setIsCalendarModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isCampusSelectModalOpen: boolean;
    setIsCampusSelectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isShareModalOpen: boolean;
    setIsShareModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isFirstLaunch: boolean;
}

type GeneralContextProps = {
    value: IGeneralContext;
    children: React.ReactNode;
};

export const GeneralContext = createContext<IGeneralContext>({
    isCalendarModalOpen: false,
    setIsCalendarModalOpen: () => null,
    isCampusSelectModalOpen: false,
    setIsCampusSelectModalOpen: () => null,
    isShareModalOpen: false,
    setIsShareModalOpen: () => null,
    isFirstLaunch: false,
});

export default function GeneralContextProvider({
    value,
    children,
}: GeneralContextProps): React.ReactElement {
    return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>;
}
