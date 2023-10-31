import * as S from "./styled";

import Image from "next/image"

import { Open_Sans, Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const Opens = Open_Sans({ subsets: ['latin'] })

export function InfoCard({Product}:any) {     
     return (
          <S.Cardinfo>
               <S.Figure>
                    <Image className="Photos" src={Product.imgURL} alt="Foto do lanche" fill={true} />
               </S.Figure>
               <S.BoxInfo className={Opens.className}>
                    <S.Text className={inter.className} as='h1'>{Product.name}</S.Text>
                    { Product.bread && <S.Text><span>{Product.bread}.</span></S.Text> }      
                    { Product.size && <S.Text><span> Peso - {Product.size}.</span></S.Text>  }
                    { Product.carnes && <S.Text><span>{Product.carnes}.</span></S.Text>  }
                    { Product.salad && <S.Text><span> Salada - {Product.salad}.</span></S.Text>  }
                    { Product.molhos && <S.Text><span> Molhos - {Product.molhos}.</span></S.Text>  }  
                    { Product.peso && <S.Text><span> Tamanho - {Product.peso}.</span></S.Text>  }  
                    { Product.descripition && <S.Text><span>Descrição - {Product.descripition}.</span></S.Text>  } 
                    { Product.warning && <S.Text><span className="warning">Aviso ! {Product.warning}.</span></S.Text>  }  
               </S.BoxInfo>
          </S.Cardinfo>
     )    
}