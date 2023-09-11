'use client'
import { SText } from "../Info/styled";
import { loadDataOnCategory } from "../../../database/server";

import { SCategorie, SContainerCatagorie, SListProductsHorizontal } from "./styled";
import { Product } from "./Product";
import { useContext } from "react";
import { ScreenHomeContext } from "@/providers/ScreenHome.Context";


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
        <SCategorie>
            <SContainerCatagorie>
                  <SText as={'h1'}><span>Categorias</span></SText>
                  <SListProductsHorizontal>
                     {
                        filteredList.map( (item:any) => (
                           <Product onClick={()=>handleClick(item)} key={item.category} product={item} />
                        ))
                     }
                  </SListProductsHorizontal>
            </SContainerCatagorie>
        </SCategorie>
     )
}