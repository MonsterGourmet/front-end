'use client'

import { useState } from 'react'

import { SCardDefault, SContainerCard, SInfos, SText, SType } from "./styled"

import Lanche from "../../../../../public/Photo-Burguer.png"

import Image from "next/image"

import { ButtonAdd } from "@/components/Button"

export function Card({Product}: any) {
     const [ cart, setCart ] = useState(true)

     return (
          //TODOS: Troque a ordem, primeiro o li depois a div. Ajuste o espaço dentro da Div.
               <SCardDefault $isCard={cart}>
                              <SContainerCard $isCard={cart}>

                    <Image className={"Photo"} src={Lanche} alt="Foto do lanche" />
                    <SInfos>
                         <SText as='h2' $isCard={cart}>{Product.name}</SText>
                         <SText as='h4' $isCard={cart}>
                         <span>{Product.price.toLocaleString('pt-br',{
                              style: 'currency',
                              currency: 'BRL'
                         })}    </span></SText>
                    </SInfos>
                    <ButtonAdd onClick={()=> setCart(!cart)} Config={"configBttnCls"} Status={cart}/>
                    <SType $isCard={cart}>
                         <SText  $isCard={cart}>Artesanal</SText>
                    </SType>
                    </SContainerCard>

               </SCardDefault>
               
     )
}

