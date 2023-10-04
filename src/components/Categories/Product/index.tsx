/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import * as S from "./styled";

import { IProductCategory } from "@/types";

export function Product({ product, onClick }: IProductCategory) {
     return (
          <S.Product onClick={onClick}>
               <S.Text as='h1'>{product.category}</S.Text>
               <S.Figure>
                    <Image src={product.imgURL} alt='Product' layout="fill" />
               </S.Figure>
          </S.Product>
     )
}