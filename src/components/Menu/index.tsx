import * as S from "./styled"

import { Inter } from "next/font/google"

import { Options } from "./OptionsBar";

import { ListCard } from "./ListProducts";

const inter = Inter({ subsets: ['latin'] })

export function Menu() {
     return (
          <S.ContainerMenu className={inter.className}>
               <S.Text>Conheça nosso</S.Text>
               <S.Text as="h1"><span>Cardápio</span></S.Text>
               <Options />
               <ListCard />
          </S.ContainerMenu>
     )
}    