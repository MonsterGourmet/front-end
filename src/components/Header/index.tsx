'use client'
import * as S from "./styled"

import * as useStore from '@/hooks/useStore'

import Profile from "../../../public/LogoOficcial.png"

import { IconCart, LogoImage } from "../Icons"

import Link from 'next/link'


export function Header() {    
     
    const getItensCart = useStore.Cart(state => state.cart)

    const itensCart = getItensCart.length

    const openingHour = 14; 
    const closingHour = 18; 

    function isStoreOpen() {
        const currentHour = new Date().getHours();
        return currentHour >= openingHour && currentHour < closingHour;
    }

    function checkStoreStatus() {
        const isOpen = isStoreOpen();
        if (isOpen) {
          return 'Open'
        } else {
            return 'Close'
        }
    }

    const interval = 5 * 60 * 1000; 
   
    setInterval(checkStoreStatus, interval);

    const stts = checkStoreStatus()

    return (
        <S.Header>
            <LogoImage  Profile={Profile} Status={stts === 'Close' ? 'Off' : 'On'}/>
            <Link href={`${ stts === 'Close' ? '/' : '/cart'} `}>
                <IconCart Number={itensCart} Status={stts}/>
            </Link>
        </S.Header>
    )
 }
 