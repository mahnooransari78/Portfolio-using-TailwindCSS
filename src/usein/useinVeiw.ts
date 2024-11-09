"use client";

import { useActiveSectionContext } from "@/containers/page";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer"; 
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const {ref, inView } = useInView({
        threshold,
    });
    const { SetActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            SetActiveSection(sectionName);
        }
    }, [inView, SetActiveSection, timeOfLastClick, sectionName]);
    return(
        {ref}
    );
};
