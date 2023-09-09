import { SBoxInfo, SCardinfo, SFigure, SText } from "./styled";
import { Open_Sans, Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const Opens = Open_Sans({ subsets: ['latin'] })

export function InfoCard() {
     return (
          <SCardinfo>
               <SFigure>

               </SFigure>
               <SBoxInfo className={Opens.className}>
                    <SText className={inter.className} as='h1'>Feroz</SText>
                    <SText className="description">Feroz</SText>
                    <SText className="description">Feroz</SText>
                    <SText className="description">Feroz</SText>
                    <SText className="description">Feroz</SText>
                    <SText className="description">Feroz</SText>
                    <SText className="description">Feroz</SText>
               </SBoxInfo>
          </SCardinfo>
     )
}