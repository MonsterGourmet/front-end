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

    setInterval(()=>setMinute(time.getMinutes()),500)

    // Troca minuto por hora, quando for fechar a compra verifique a hora.
    useEffect(() => {
        if (minute >= 17 && minute < 29)  {
            setStts('Open');
        } 

        if( minute >= 30){
            setStts('Close');
        }
    }, [minute]);

    return (
        <SHeader>
            <Logo       Profile={Profile}   Status={stts === 'Close' ? 'Off' : 'On'}/>
            <IconCart   Number={2}          Status={stts}/>
        </SHeader>
    )
 }
 