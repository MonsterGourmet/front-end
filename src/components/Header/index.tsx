'use client'
import * as S from "./styled"

import * as useStore from '@/hooks/useStore'

import Profile from "../../../public/LogoOficcial.png"

import { useEffect, useState } from "react"

import { IconCart, LogoImage } from "../Icons"

import Link from 'next/link'


export function Header() {    
     
    const getItensCart = useStore.Cart((state:any) => state.cart)

    const itensCart = getItensCart.length

    const [hour, setHour] = useState(new Date().getHours());
    const [stts, setStatus] = useState<'Open' | 'Close'>('Close');

    const openingHour = 17; 
    const closingHour = 23; 

    useEffect(() => {
        const timer = setInterval(() => {
        const currentHour = new Date().getHours();
        setHour(currentHour);

        if (currentHour >= openingHour && currentHour < closingHour) {
            setStatus('Open');
        } else {
            setStatus('Close');
        }
        }, 60000); 

        return () => clearInterval(timer); 
    }, []);

    return (
        <S.Header>
            <LogoImage  Profile={Profile} Status={stts === 'Close' ? 'Off' : 'On'}/>
            <Link href={`${ stts === 'Close' ? '/' : '/cart'} `}>
                <IconCart Number={itensCart} Status={stts}/>
            </Link>
        </S.Header>
    )
 }
 