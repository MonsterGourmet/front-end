'use client'
import * as S from './warning.style'

import { Inter } from 'next/font/google'

import { Checkout } from '../Checkout'
import { AwaitCheckout } from '../Checkout/waiting'


const inter = Inter({ subsets: ['latin'] })

export function AwaitCart() {

     return (
          <S.Cart className={inter.className}>
               <S.Container>
                    <S.Text></S.Text>
                    <S.ListCard></S.ListCard>
                    <AwaitCheckout />
               </S.Container>
          </S.Cart>
     )
}