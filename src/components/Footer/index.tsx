import * as S from "./styled"

import { Inter } from "next/font/google"

import { LogoText, Signature } from "@/assets/Logo";

const inter = Inter({ subsets: ['latin'] })

export function Footer() {
     return (
          <S.Footer className={inter.className}>
               <S.ContainerFooter>
                    <LogoText />
                    <S.Text>
                         <span>Localizada:</span> Pojuca-BA, Rua Antonio Mota
                    </S.Text>
                    <Signature />
               </S.ContainerFooter>
          </S.Footer>
     )
}