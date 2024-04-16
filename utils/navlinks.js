import React from "react"
import { GiFeatherNecklace } from "react-icons/gi";
import { GiEarrings } from "react-icons/gi";
import { GiEngagementRing } from "react-icons/gi";
import { LuBringToFront } from "react-icons/lu";
import { PiSunglassesBold } from "react-icons/pi";
export const navMenuLinks = [
    {
        title:'Halsband',
        path:'smycken/halsband',
        icon:<GiFeatherNecklace/>
    },
    {
        title:'Örhängen',
        path:'smycken/orhangen',
        icon:<GiEarrings/>
    },
    {
        title:'Ringar',
        path:'smycken/ringar',
        icon:<GiEngagementRing/>
    },
    {
        title:'Armband',
        path:'smycken/armband',
        icon:<LuBringToFront/>
    },
    {
        title:'Hårgrejer',
        path:'har/hartillbehor'
    },
    {
        title:'Solglasögon',
        path:'solglasogon',
        icon:<PiSunglassesBold/>
    },
]

