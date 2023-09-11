'use client'

import * as S from "./styled"

import Image from "next/image"

import  Monster  from "../../../../public/IconMonster.jpg"

import { Text } from "../styled";

import { useState } from "react";

import { loadDataOnCategory } from "../../../../database/server";


export function Options() {
     const [ optionSelected, setOptionSelected] = useState('all')

     return (
          <S.NavBarHorizontal>
               <ul>
               {
                    loadDataOnCategory.map(item => {
                         return(
                              <S.Option key={item.category} onClick={()=>setOptionSelected(item.category)}>
                                  <Text className={"Option"}>{item.category}</Text>
                                  <Image className={"Icon"} src={Monster} alt="Logo" />
                              </S.Option>
                         )
                    })
               }
               </ul>
          </S.NavBarHorizontal>
     )
}
