import * as S from "./waiting.styled"

import { Inter } from "next/font/google"

import { ListCard } from "./ListProducts";

import { AwaitOptions } from "./OptionsBar/waiting";
import { AwaitListCard } from "./ListProducts/waiting";

const inter = Inter({ subsets: ['latin'] })

export function AwaitMenu() {
     return (
          <S.ContainerMenu className={inter.className}>
               <S.Text></S.Text>
               <S.Text as="h1"></S.Text>
               <AwaitOptions/>
               <AwaitListCard />
          </S.ContainerMenu>
     )
}    