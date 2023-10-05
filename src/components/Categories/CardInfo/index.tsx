import * as S from "./styled";

import Image from "next/image"

import { Open_Sans, Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const Opens = Open_Sans({ subsets: ['latin'] })
//TODOS: ADD TYPEpeso
export function InfoCard({Product}:any) {     
     return (
          <S.Cardinfo>
               <S.Figure>
                    <Image className="Photos" src={Product.imgURL} alt="Foto do lanche" fill={true} />
               </S.Figure>
               <S.BoxInfo className={Opens.className}>
                    <S.Text className={inter.className} as='h1'>{Product.name}</S.Text>
                    { Product.bread && <S.Text className="description"><span>{Product.bread}.</span></S.Text> }      
                    { Product.size && <S.Text className="description"><span> Tamanho - {Product.size}.</span></S.Text>  }
                    { Product.carnes && <S.Text className="description"><span>{Product.carnes}.</span></S.Text>  }
                    { Product.salad && <S.Text className="description"><span> Salada - {Product.salad}.</span></S.Text>  }
                    { Product.molhos && <S.Text className="description"><span> Molhos - {Product.molhos}.</span></S.Text>  }  
                    { Product.peso && <S.Text className="description"><span> Peso - {Product.peso}.</span></S.Text>  }  
                    { Product.descripition && <S.Text className="description"><span>{Product.descripition}.</span></S.Text>  }  
               </S.BoxInfo>
          </S.Cardinfo>
     )    
}