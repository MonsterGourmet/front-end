'use client'

import * as S from "./styled"

import * as useStore from '@/hooks/useStore'

import Lanche from "../../../../../public/Photo-Burguer.png"

import Image from "next/image"

import { ButtonAdd } from "@/components/Button"

import { usePersistedState } from '@/utils/usePersist'


export function Card({Product, N}: any) {
     const [ cart, setCart] = usePersistedState(`${Product.id}`,true)

     const addCart = useStore.Cart(state => state.addCart)
     const remCart = useStore.Cart(state => state.remCart)

     const handleClick = () => {
          setCart(!cart)

          if(cart){
               addCart(Product)
          }else{
               remCart(Product)
          }
     }

     return (
          <S.CardDefault $Delay={`swing-in-left-fwd 1.${N}s both linear`} $isCard={cart}>
               <S.ContainerCard $isCard={cart}>
                    <Image className={"Photo"} src={Lanche} alt="Foto do lanche" />
                    <S.Infos>
                         <S.Text as='h2' $isCard={cart}>{Product.name}</S.Text>
                         <S.Text as='h4' $isCard={cart}>
                              <span>
                                   {Product.price.toLocaleString('pt-br',{
                                        style: 'currency',
                                        currency: 'BRL'
                                   })}    
                              </span>
                         </S.Text>
                    </S.Infos>
                    <ButtonAdd onClick={handleClick} configCss={"configBttnCls"} status={cart}/>
                    <S.Type $isCard={cart}>
                         <S.Text  $isCard={cart}>Artesanal</S.Text>
                    </S.Type>
               </S.ContainerCard>
          </S.CardDefault>
     )
}

