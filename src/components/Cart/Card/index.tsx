'use client'

import * as S from './styled'
import * as useStore from '@/hooks/useStore'

import Image from 'next/image'
import Photo from "../../../../public/Photo-Burguer.png"

import { ButtonCounter, ButtonRemoveCart } from '@/components/Button'
import { useState } from 'react'


export function CartCard({Product, N}: any) {
     const [ cart, setCart] = useState(true)        

     const remCart = useStore.Cart((state:any) => state.remCart)
     const moreItem = useStore.Cart((state:any) => state.moreItem)
     const lessItem = useStore.Cart((state:any) => state.lessItem)

     const setStorage = ( key: any, value: any ) => {
          const data = JSON.stringify(value)
          
          return window.localStorage.setItem(key, data)
     }

     const handleClick = () => {
          setStorage(Product.id, true)

          remCart(Product)
     }

     return (
          <S.CardDefault $Delay={`swing-in-left-fwd 1.${N}s both linear`} $isCard={cart}>
               <S.ContainerCard $isCard={cart}>
                    <Image className={"Photo"} src={Photo} alt="Foto do lanche" />
                    <S.Infos>
                         <S.Text  $isCard={cart}>{Product.name}</S.Text>
                         <S.Text as='h4' $isCard={cart}>
                              <span>
                                   {Product.price.toLocaleString('pt-br',{
                                        style: 'currency',
                                        currency: 'BRL'
                                   })}    
                              </span>
                         </S.Text>
                         {/* <S.Type $isCard={cart}>
                              <S.Text  $isCard={cart}>Artesanal</S.Text>
                         </S.Type> */}
                    </S.Infos>
                    <S.BoxCount>
                         <S.Text className='Quantity'>{Product.qtdd}x</S.Text>
                         <S.Text className='Value'>{Product.value.toLocaleString('pt-br',{
                                        style: 'currency',
                                        currency: 'BRL'
                                   })}
                         </S.Text>
                    </S.BoxCount>
                    <S.BoxButtons>
                         <ButtonCounter onClick={()=>moreItem(Product)} Symbols='+'/>
                        {
                          Product.qtdd === 1 ? <ButtonRemoveCart onClick={handleClick} ConfigCss={""}/> :   <ButtonCounter onClick={()=>lessItem(Product)} Symbols='-'/>

                        }
                    </S.BoxButtons>
               </S.ContainerCard>
          </S.CardDefault>
     )
}

