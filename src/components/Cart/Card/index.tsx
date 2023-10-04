'use client'

import * as S from './styled'
import * as useStore from '@/hooks/useStore'

import Image from 'next/image'
import Photo from "../../../../public/Photo-Burguer.png"

import { IProductCart } from '@/types'

import { ButtonCounter, ButtonRemoveCart } from '@/components/Button'

export function CartCard({Product}: IProductCart) {
     const remCart = useStore.Cart(state => state.remCart)
     const moreItem = useStore.Cart(state => state.moreItem)
     const lessItem = useStore.Cart(state => state.lessItem)

     const setStorage = ( key: number, value: boolean ) => {
          const data = JSON.stringify(value)
          const Key  = key.toString()
          
          return window.localStorage.setItem(Key, data)
     }

     const handleClick = () => {
          setStorage(Product.id, true)

          remCart(Product)
     }

     return (
          <S.CardDefault >
               <S.ContainerCard>
                    <Image className={"Photo"} src={Photo} alt="Foto do lanche" />
                    <S.Infos>
                         <S.Text>{Product.name}</S.Text>
                         <S.Text as='h4'>
                              <span>
                                   {Product.price.toLocaleString('pt-br',{
                                        style: 'currency',
                                        currency: 'BRL'
                                   })}    
                              </span>
                         </S.Text>
                    </S.Infos>
                    <S.BoxCount>
                         <S.Text className='Quantity'>{Product.qtdd}x</S.Text>
                         <S.Text className='Value'>
                              {
                                   Product.value.toLocaleString('pt-br',
                                   {
                                        style: 'currency',
                                        currency: 'BRL'
                                   })
                              }
                         </S.Text>
                    </S.BoxCount>
                    <S.BoxButtons>
                         <ButtonCounter onClick={()=>moreItem(Product)} symbols='+'/>
                        {
                          Product.qtdd === 1 ? <ButtonRemoveCart onClick={handleClick} configCss={""}/> :   <ButtonCounter onClick={()=>lessItem(Product)} symbols='-'/>
                        }
                    </S.BoxButtons>
               </S.ContainerCard>
          </S.CardDefault>
     )
}

