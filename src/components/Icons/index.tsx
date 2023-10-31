import Image from "next/image";
import Link from "next/link";

import * as S from "./styled"

import * as I from "./types"

import { BsCart, BsCartX, BsFillTelephoneOutboundFill } from "react-icons/bs";

export function LogoImage({Profile, Status}: I.Logo): JSX.Element {
     return (
          <S.Figure status={Status}>
               <Link href="https://www.instagram.com/monster_gourmets/">
                    <Image src={Profile} alt="Logo" />
               </Link>
          </S.Figure>
     )
}

export function LogoText({Profile, Status}: I.Logo): JSX.Element {
     return (
          <S.Figure status={Status}>
               <Link href="https://www.linkedin.com/in/brunoabreudev/">
                    <Image src={Profile} alt="Logo" />
               </Link>
          </S.Figure>
     )
}
export function IconTell() {
     return (
          <S.IconTell>
               <BsFillTelephoneOutboundFill></BsFillTelephoneOutboundFill>
          </S.IconTell>
     )
}

export function IconCart({Number, Status}: I.Type): JSX.Element {
     const Open = (Number: number, Status: 'Open' | 'Close'): JSX.Element => (
          <S.IconCart status={Status}>
               <BsCart></BsCart>
               {
                    Number > 0 ? <S.Ball>{Number}</S.Ball> : null
               }
          </S.IconCart>
     )

     const Close = ( Status: 'Open' | 'Close'): JSX.Element => (
          <S.IconCart status={Status}>
               <BsCartX></BsCartX>
          </S.IconCart>
     )
     
     const TypeCart = Status === 'Open' ? Open(Number, Status) : Close(Status)

     return TypeCart
}