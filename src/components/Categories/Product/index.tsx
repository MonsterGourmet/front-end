/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import * as S from "./styled";

import { IProductCategory } from "@/types";

export function Product({ product, onClick }: IProductCategory) {
     return (
          <S.Product onClick={onClick}>
               <S.Figure>
                    <Image src={product.imgURL} alt='Product' width={100} height={200} />
               </S.Figure>
          </S.Product>
     )
}