import * as S from "./styled";

import Image from "next/image"

import { Open_Sans, Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const Opens = Open_Sans({ subsets: ['latin'] })
//TODOS: ADD TYPE
export function InfoCard({Product}:any) {     
     return (
          <S.Cardinfo>
               <S.Figure>
                    <Image className="Photos" src={Product.imgURL} alt="Foto do lanche" fill={true} />
               </S.Figure>
               <S.BoxInfo className={Opens.className}>
                    <S.Text className={inter.className} as='h1'>{Product.name}</S.Text>
                    { Product.bread && <S.Text className="description">{Product.bread}</S.Text> }      
                    <hr></hr>
                    { Product.carnes && <S.Text className="description">{Product.carnes}</S.Text>  }
                    <hr></hr>
                    { Product.salad && <S.Text className="description">Salada - {Product.salad}</S.Text>  }
                    <hr></hr>
                    { Product.molhos && <S.Text className="description">Molhos - {Product.molhos}</S.Text>  }  
                    <hr></hr>          
                    { Product.descripition && <S.Text className="description">{Product.descripition}</S.Text>  }  
                    <hr></hr>                 
               </S.BoxInfo>
          </S.Cardinfo>
     )    
}