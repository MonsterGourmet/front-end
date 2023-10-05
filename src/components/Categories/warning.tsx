'use client'

import * as S from "./warning.styled"

import * as useStore from '@/hooks/useStore'

import { Text } from "../Info/styled";

import { Inter } from "next/font/google"

import { Product } from "./Product";

import { useContext } from "react";

import { loadDataOnCategory } from "../../../database/server";

import { AwaitProduct } from "./Product/warning";

const inter = Inter({ subsets: ['latin'] })

export function AwaitCategories() {
      const checkCategories = (listData: any, remove: any) => {
         const filteredList = listData.filter( (category:any) => category.category !== remove )  

         return filteredList
      }

      const filteredList = checkCategories(loadDataOnCategory, 'Bebida')

      return (
        <S.Categorie className={inter.className}>
            <S.ContainerCategorie>
                  <S.Text as={'h1'}></S.Text>
                  <S.ListProductsHorizontal>
                     {
                        filteredList.map( (item:any) => (
                           // eslint-disable-next-line react/jsx-key
                           <AwaitProduct />
                        ))
                     }
                  </S.ListProductsHorizontal>
            </S.ContainerCategorie>
        </S.Categorie>
     )
}