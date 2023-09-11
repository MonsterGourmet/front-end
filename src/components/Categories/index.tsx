'use client'

import * as S from "./styled"

import { Text } from "../Info/styled";

import { Inter } from "next/font/google"

import { Product } from "./Product";

import { useContext } from "react";

import { loadDataOnCategory } from "../../../database/server";

import { ScreenHomeContext } from "@/providers/ScreenHome.Context";

const inter = Inter({ subsets: ['latin'] })

export function Categories() {
      const { useModalStore } = useContext(ScreenHomeContext)

      const sttsModal = useModalStore((state:any) => state.alteredSttsModal)

      const alterInfoModal = useModalStore((state:any) => state.alteredInfoModal)

      const handleClick = (info: any) => {
         sttsModal(true); 

         const Type = info.category

         const infoModal = {
            type: Type,
            Model: 'Food',
         }

         alterInfoModal(infoModal);
      }

      const checkCategories = (listData: any, remove: any) => {
         const filteredList = listData.filter( (category:any) => category.category !== remove )  

         return filteredList
      }

      const filteredList = checkCategories(loadDataOnCategory, 'Bebida')

      return (
        <S.Categorie className={inter.className}>
            <S.ContainerCategorie>
                  <Text as={'h1'}><span>Categorias</span></Text>
                  <S.ListProductsHorizontal>
                     {
                        filteredList.map( (item:any) => (
                           <Product onClick={()=>handleClick(item)} key={item.category} product={item} />
                        ))
                     }
                  </S.ListProductsHorizontal>
            </S.ContainerCategorie>
        </S.Categorie>
     )
}