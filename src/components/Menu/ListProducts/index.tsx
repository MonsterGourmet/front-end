'use client'
import { loadDataOnCategory } from "../../../../database/server";
import { Card } from "./Card";

import * as S from "./style";

export function ListCard() {

     const filter = 'Burguer'

     const filteredList = loadDataOnCategory.filter( item => item.category === filter )
     const list = filteredList[0].products

     return (
          <S.SList>
               {
                    list.map( Product => (
                         <Card key={Product.name} Product={Product} />
                    ))
               }
          </S.SList>
     )
}    