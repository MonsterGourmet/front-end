/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import * as S from "./styled";


interface IProduct {
  product: {
     imgURL: string ;
     category: string;
  }
}

export function Product({ product, onClick }:any) {
     return (
          <S.Product onClick={onClick}>
               <S.Text as='h1'>{product.category}</S.Text>
               <S.Figure>
                    <Image src={product.imgURL} alt='Product' layout="fill" />
               </S.Figure>
          </S.Product>
     )
}