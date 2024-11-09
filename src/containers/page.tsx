"use client";
import { SectionName } from "@/usein/types";
import React, { useState, createContext, useContext} from "react";

type ActiveSectionContextProvideProps = {
    children: React.ReactNode;
};
type ActiveSectionContextType = {
    activeSection: SectionName;
    SetActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
};

export const ActiveSectionContext =
   createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProvideProps) {
   
   const [activeSection, SetActiveSection] = useState<SectionName>("#home");
   const [timeOfLastClick, setTimeOfLastClick] = useState(0);


    return(
        <ActiveSectionContext.Provider
        value={{
            activeSection,
            SetActiveSection,
            timeOfLastClick,
            setTimeOfLastClick,
        }}
        >
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext (){
    const Context = useContext(ActiveSectionContext);

    if(Context ===null) {
        throw new Error (
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        )
    }

    return Context
}