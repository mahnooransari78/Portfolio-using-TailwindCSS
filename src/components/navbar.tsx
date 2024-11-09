import {links} from "@/usein/data"
import React from "react"
import Header from "./header"
import HamgurgerMenu from "./hamburger-menu"


export default function Navbar(){
    return(
        <nav>
            <HamgurgerMenu links={links} />
            <Header links={links}/> 

        </nav>
    )
}