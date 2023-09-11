import * as S from "./styled"

import { Inter } from "next/font/google"

import { IconTell } from "../Icons"

import { ButtonContact } from "../Button"

const inter = Inter({ subsets: ['latin'] })

export function Information() {
     return (
          <S.Info className={inter.className}>  
               <S.ContainerInformation>
                    <S.Text as='h1'>Escolha seu lanche <span>favorito</span></S.Text>
                    <S.Text>Aproveite nosso cardapio, realize seu pedido pelo site, e será levado a concluir no nosso Zap de forma <span>rápida</span> e <span>segura</span>.</S.Text>
                    <S.Text>Funcionando <span>das 17:00 ás 23:00</span>.</S.Text>
                    <S.Text>De <span>quarta á domingo</span> </S.Text>
                    <S.Contact> 
                         {/* Grid p/ dividir */}
                         <IconTell />
                         <ButtonContact text='7199909688' />
                    </S.Contact>
               </S.ContainerInformation>        
          </S.Info>

     )
}