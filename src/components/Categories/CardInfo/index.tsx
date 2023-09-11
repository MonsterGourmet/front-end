import { SBoxInfo, SCardinfo, SFigure, SText } from "./styled";
import { Open_Sans, Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const Opens = Open_Sans({ subsets: ['latin'] })

export function InfoCard({Product}:any) {
     console.log(Product)
     
     return (
          <SCardinfo>
               <SFigure>
                    
               </SFigure>
               <SBoxInfo className={Opens.className}>
                    <SText className={inter.className} as='h1'>{Product.name}</SText>
                    { Product.carnes ? <SText className="description">{Product.carnes}<hr></hr></SText> : null }
                    { Product.salad ? <SText className="description">Salada - {Product.salad}<hr></hr></SText> : null }
                    { Product.bread ? <SText className="description">{Product.bread}<hr></hr></SText> : null }                    
               </SBoxInfo>
          </SCardinfo>
     )    
}