'use client'

import * as S from "./styled"

import * as useStore from '@/hooks/useStore'

import Image from "next/image"

import  Monster  from "../../../../public/IconMonster.jpg"

import { Text } from "../styled";

import { useContext } from "react";

import { loadDataOnCategory } from "../../../../database/server";
import { ScreenHomeContext } from "@/providers/ScreenHome.Context";


export function Options() {
     const setOption = useStore.Menu(state => state.setOptionMenu)

     return (
          <S.NavBarHorizontal>
               <ul>
               {
                    loadDataOnCategory.map(item => {
                         return(
                              <S.Option key={item.category} onClick={()=>setOption(item.category)}>
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
