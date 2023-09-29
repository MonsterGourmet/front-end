import * as S from "./waiting.styled"

import { Inter } from "next/font/google"

import { IconTell } from "../Icons"

import { ButtonContact } from "../Button"

const inter = Inter({ subsets: ['latin'] })

export function AwaitInformation() {
     return (
          <S.Info className={inter.className}>  
               <S.ContainerInformation>
                    <S.Text as='h1'></S.Text>
                    <S.Text></S.Text>
                    <S.Text></S.Text>
                    <S.Text></S.Text>
                    <S.Contact> 
                         {/* <IconTell />
                         <ButtonContact text='7199909688' /> */}
                    </S.Contact>
               </S.ContainerInformation>        
          </S.Info>

     )
}