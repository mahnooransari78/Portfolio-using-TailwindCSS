import ActiveSectionContextProvider from "@/containers/page";
import React from "react";


type ProviderProps ={
    children: React.ReactNode
};

export default function Provider({children} : ProviderProps) {
    return(
        <ActiveSectionContextProvider>
            {children}
        </ActiveSectionContextProvider>
    )
}