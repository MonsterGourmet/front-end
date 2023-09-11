/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import { SText } from "@/components/Info/styled";

import { SFigure, SProduct } from "./styled";

interface IProduct {
  product: {
     imgURL: string ;
     category: string;
  }
}

export function Product({ product, onClick }:any) {
     return (
          <SProduct onClick={onClick}>
               <SText as='h1'>{product.category}</SText>
               <SFigure>
                    <Image src={product.imgURL} alt='Product' layout="fill" />
               </SFigure>
          </SProduct>
     )
}