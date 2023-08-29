import Profile from "../../../public/phot-lanche.png"

import { Logo } from "../Icons"

import { SHeader } from "./styled"

export function Header() {
     return (
           <SHeader>
               <Logo Profile={Profile}/>
           </SHeader>
     )
 }
 