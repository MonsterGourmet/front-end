import * as S from "./styled";

import { Open_Sans, Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const Opens = Open_Sans({ subsets: ['latin'] })

export function InfoCard({Product}:any) {     
     return (
          <S.Cardinfo>
               <S.Figure>
                    
               </S.Figure>
               <S.BoxInfo className={Opens.className}>
                    <S.Text className={inter.className} as='h1'>{Product.name}</S.Text>
                    { Product.carnes ? <S.Text className="description">{Product.carnes}<hr></hr></S.Text> : null }
                    { Product.salad ? <S.Text className="description">Salada - {Product.salad}<hr></hr></S.Text> : null }
                    { Product.bread ? <S.Text className="description">{Product.bread}<hr></hr></S.Text> : null }                    
               </S.BoxInfo>
          </S.Cardinfo>
     )    
}