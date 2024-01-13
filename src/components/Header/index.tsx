'use client'
import * as S from "./styled"

import * as useStore from '@/hooks/useStore'

import Link from 'next/link'

import Profile from "../../../public/LogoOficcial.png"

import { IconCart, LogoImage } from "../Icons"


export function Header() {    
     
    const getItensCart = useStore.Cart(state => state.cart)

    const itensCart: number = getItensCart.length

    const openingHour: number = 17; 
    const closingHour: number = 23; 

    function isStoreOpen(): boolean {
        const currentHour: number = new Date().getHours();
        return currentHour >= openingHour && currentHour < closingHour;
    }

    function isWorkingDay(): boolean {
        const today: number = new Date().getDay(); 
        // return today > 3 && today < 7; 
         return today > 3 || today == 0;
    }
    
    function checkStoreStatus() {
        const isOpen: boolean = isStoreOpen();
        const isWorking: boolean = isWorkingDay();

        if (isOpen && isWorking) {
            return 'Open';
        } else {
            return 'Close';
        }
    }

    const interval: number = 5 * 60 * 1000; 
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
 
