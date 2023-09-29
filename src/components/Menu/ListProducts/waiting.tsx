'use client'
import * as S from "./styled";
import * as useStore from '@/hooks/useStore'

import { Card } from "./Card";

import { loadDataOnCategory } from "../../../../database/server";
import { AwaitCard } from "./Card/waiting";

export function AwaitListCard() {
     const getOption = useStore.Menu(state => state.optionBar)

     const filteredList = loadDataOnCategory.filter( item => item.category === getOption )
     const list = filteredList[0].products
     //TODOS: Transform in function
     return (
          <S.SList>
               {
                    list.map( item => (
                         // eslint-disable-next-line react/jsx-key
                         <AwaitCard  />
                    ))
               }
          </S.SList>
     )
}    