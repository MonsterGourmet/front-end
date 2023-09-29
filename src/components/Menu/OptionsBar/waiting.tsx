'use client'

import * as S from "./waiting.styled"

import * as useStore from '@/hooks/useStore'

import Image from "next/image"

import  Monster  from "../../../../public/IconMonster.jpg"

import { Text } from "../styled";

import { loadDataOnCategory } from "../../../../database/server";

export function AwaitOptions() {
     const setOption = useStore.Menu(state => state.setOptionMenu)

     return (
          <S.NavBarHorizontal>
               <ul>
               {
                    loadDataOnCategory.map(item => {
                         return(
                              // eslint-disable-next-line react/jsx-key
                              <S.Option >
                              </S.Option>
                         )
                    })
               }
               </ul>
          </S.NavBarHorizontal>
     )
}
