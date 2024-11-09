"use client";
import { projectsData } from "@/usein/data";
import SectionHeading from "./section-heading";
import Project from "./project-card";
import { useSectionInView } from "@/usein/useinVeiw";


export default function Projects (){
    const {ref} = useSectionInView("#project",0.1);
    return (
        <section 
        id="projects"
        ref={ref}
        className="scroll-mt-28 mb-28"
        >
            <SectionHeading>
               My Projects
            </SectionHeading>

            <div>
                {
                    projectsData.map((project, index) => (
                        <Project {...project} key={index}/>
                    ))  
                }
            </div>

        </section>
    )
}