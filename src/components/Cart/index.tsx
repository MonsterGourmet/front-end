'use client'
import * as S from './styled'
import * as useStore from '@/hooks/useStore'

import { Inter } from 'next/font/google'

import { Checkout } from '../Checkout'
import { CartCard } from './Card'
import { IDefaultProduct } from '@/types'

import { FaRegSadCry } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export function Cart() {
     const itemsCart = useStore.Cart( state => state.cart)

     const statusCart = itemsCart.length


     const infoCart = statusCart > 0 ? 'Seu Carrinho:' : `Seu carrinho se encontra vazio`

     return (
          <S.Cart className={inter.className}>
               <S.Container>
                    <S.Text>{infoCart}</S.Text>
                    <S.ListCard>
                         {
                              itemsCart.map((item: IDefaultProduct) => <CartCard key={item.name} Product={item} />)
                         }
                    </S.ListCard>
                    <Checkout />
               </S.Container>
          </S.Cart>
     )
}