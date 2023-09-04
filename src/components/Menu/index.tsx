import { SContainerMenu, SText } from "./styled";

import { Options } from "./OptionsFood";


export function Menu() {
     return (
          <SContainerMenu>
               <SText>Conheço nosso</SText> 
               <SText><span>Cardapio</span></SText>
               <Options />
          </SContainerMenu>
     )
}