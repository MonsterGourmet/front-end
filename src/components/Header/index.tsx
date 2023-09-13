'use client'
import * as S from "./styled"

import * as useStore from '@/hooks/useStore'

import Profile from "../../../public/LogoOficcial.png"

import { useState } from "react"

import { IconCart, LogoImage } from "../Icons"

//Todos: Passar para provider, LÓGICA DE DIAS

export function Header() {    
    // const { useCartStore } = useContext(ScreenHomeContext)
     
    const getItensCart = useStore.Cart((state:any) => state.cart)

    const itensCart = getItensCart.length

    const time = new Date()

    const [ hour, setHour ] = useState(time.getHours())
    const [ minute, setMinute ] = useState(time.getMinutes())
    
    const [ stts, setStts] = useState<'Open' | 'Close' >('Open')

    setInterval(()=>setMinute(time.getMinutes()),58000)

    // Troca minuto por hora, quando for fechar a compra verifique a hora.
    // useEffect(() => {
    //     if (minute >= 17 && minute < 23)  {
    //         setStts('Open');
    //     } 

    //     if( minute >= 23){
    //         setStts('Close');
    //     }
    // }, [minute]);


    return (
        <S.Header>
            <LogoImage  Profile={Profile}   Status={stts === 'Close' ? 'Off' : 'On'}/>
            <IconCart   Number={itensCart}          Status={stts}/>
        </S.Header>
    )
 }
 