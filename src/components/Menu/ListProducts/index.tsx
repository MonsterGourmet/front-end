'use client'
import * as S from "./styled";
import * as useStore from '@/hooks/useStore'

import { Card } from "./Card";

import { loadDataOnCategory } from "../../../../database/server";

export function ListCard() {
     const getOption = useStore.Menu(state => state.optionBar)

     const filteredList = loadDataOnCategory.filter( item => item.category === getOption )
     const list = filteredList[0].products

     return (
          <S.SList>
               {
                    list.map( (Product, Number) => (
                         <Card key={Product.name} Product={Product} N={Number} />
                    ))
               }
          </S.SList>
     )
}    