'use client'

import Profile from "../../../public/LogoOficcial.png"

import { IconCart, Logo } from "../Icons"

import { useEffect, useState } from "react"

import { SHeader } from "./styled"

//Todos: Passar para provider, LÓGICA DE DIAS

export function Header() {    
    const time = new Date()

    const [ hour, setHour ] = useState(time.getHours())
    const [ minute, setMinute ] = useState(time.getMinutes())
    
    const [ stts, setStts] = useState<'Open' | 'Close' >('Close')

    setInterval(()=>{setHour(time.getHours()); setMinute(time.getMinutes())},58000)

    // Troca minuto por hora
    useEffect(() => {
        setHour(time.getHours());
        setMinute(time.getMinutes());

        if (minute >= 0 && minute < 10)  {
            setStts('Open');
        } 

    }, [minute]);

    return (
        <SHeader>
            <Logo       Profile={Profile}   Status={stts === 'Close' ? 'Off' : 'On'}/>
            <IconCart   Number={2}          Status={stts}/>
        </SHeader>
    )
 }
 