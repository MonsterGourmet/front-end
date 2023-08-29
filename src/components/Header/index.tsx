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

    setInterval(()=>{setHour(time.getHours()); setHour(time.getMinutes())},58000)

    useEffect(() => {
        setHour(time.getHours());
        setMinute(time.getMinutes());

        if (hour >= 18 && minute >= 31) {
            setStts('Open');
        } 
        
        if (hour >= 18 && minute >= 33) {
            setStts('Close');
        }

    }, [hour,minute]);

    return (
        <SHeader>
            <Logo       Profile={Profile}   Status={stts === 'Close' ? 'Off' : 'On'}/>
            <IconCart   Number={2}          Status={stts}/>
        </SHeader>
    )
 }
 