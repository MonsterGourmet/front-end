import { Options } from "./OptionsBar";

import { ListCard } from "./ListProducts";

import { SContainerMenu, SText } from "./styled";

export function Menu() {
     return (
          <SContainerMenu>
               <SText>Conheça nosso</SText>
               <SText as="h1"><span>Cardápio</span></SText>
               <Options/>
               <ListCard />
          </SContainerMenu>
     )
}