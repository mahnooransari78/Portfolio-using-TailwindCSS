"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/usein/useinVeiw";
import SectionHeading from "./section-heading"
import SubmitBtn from "./submit-btn";

import { Fade } from "react-awesome-reveal";

export default function Contect (){
   const { ref } = useSectionInView("#contect");

    return (
        <motion.section 
        id="contect"
        ref={ref}
        >
            <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
               <SectionHeading>
                   Contect Me
                </SectionHeading>
            </Fade>
             
            <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
             "Feel free to connet me  directly throug this form"
             </p>
            </Fade>
            
            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}>
            <form className="mt-10 flex flex-col dark:text-black">
                <input 
                className="h-14 px-4 rounded-lg border-black dark:bg-white "
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
                />
                <textarea 
                className="h-52 my-3 rounded-lg resize-none border-black p-4 "
                name="message"
                placeholder=" Your Massege"
                maxLength={5000}
                />

                <SubmitBtn text="submit"/>
             </form>
            </Fade>
             
             
        </motion.section>
    )
}