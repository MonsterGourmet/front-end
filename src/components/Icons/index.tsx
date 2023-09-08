import Image from "next/image";
import Link from "next/link";

import { SBall, SFigure, SIconCart, SIconTell } from "./styled";

import { BsCart, BsCartX, BsFillTelephoneOutboundFill } from "react-icons/bs";

import { ILogo, Type } from "./types";

export function LogoImage({Profile, Status}: ILogo): JSX.Element {
     return (
          <SFigure status={Status}>
               <Link href="https://www.linkedin.com/in/brunoabreudev/">
                    <Image src={Profile} alt="Logo" />
               </Link>
          </SFigure>
     )
}

export function LogoText({Profile, Status}: ILogo): JSX.Element {
     return (
          <SFigure status={Status}>
               <Link href="https://www.linkedin.com/in/brunoabreudev/">
                    <Image src={Profile} alt="Logo" />
               </Link>
          </SFigure>
     )
}
export function IconTell() {
     return (
          <SIconTell>
               <BsFillTelephoneOutboundFill></BsFillTelephoneOutboundFill>
          </SIconTell>
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
     
     const TypeCart = Status === 'Open' ? Open(Number, Status) : Close(Status)

     return TypeCart
}