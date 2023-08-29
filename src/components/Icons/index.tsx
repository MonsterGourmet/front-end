'use client'

import Image from "next/image";
import { SFigure } from "./styled";

export function Logo({Profile}: any) {
     return (
          <SFigure>
               <Image src={Profile} alt="Logo"/>
          </SFigure>
     )
}