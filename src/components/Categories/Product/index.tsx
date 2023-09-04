/* eslint-disable @next/next/no-img-element */
import { SText } from "@/components/Info/styled";
import { SFigure, SProduct } from "./styled";
import Image, { StaticImageData } from "next/image";

import Lanche from "../../../../public/Photo-Burguer.png"

interface IProduct {
  product: {
     imgURL: string ;
     category: string;
  }
}

export function Product({ product }:IProduct) {
     return (
          <SProduct>
               <SText as='h1'>{product.category}</SText>
               <SFigure>
                    <Image src={product.imgURL} alt='Product' layout="fill" />
               </SFigure>
          </SProduct>
     )
}