import Image from "next/image";
import Link from "next/link";

import { SBall, SFigure, SIconCart } from "./styled";

import { BsCart, BsCartX } from "react-icons/bs";

import { ILogo, Type } from "./types";

export function Logo({Profile, Status}: ILogo): JSX.Element {
     return (
          <SFigure status={Status}>
               <Link href="https://www.linkedin.com/in/brunoabreudev/">
                    <Image src={Profile} alt="Logo" />
               </Link>
          </SFigure>
     )
}

export function IconCart({Number, Status}: Type): JSX.Element {
     const Open = (Number: number, Status: 'Open' | 'Close'): JSX.Element => (
          <SIconCart status={Status}>
               <BsCart></BsCart>
               <SBall>{Number}</SBall>
          </SIconCart>
     )

     const Close = ( Status: 'Open' | 'Close'): JSX.Element => (
          <SIconCart status={Status}>
               <BsCartX></BsCartX>
          </SIconCart>
     )

     // if(Status === 'Open') {
     //      return Open(Number, Status)
     // }else {
     //      return Close(Status)
     // }

     const TypeCart = Status === 'Open' ? Open(Number, Status) : Close(Status)

     return TypeCart
}