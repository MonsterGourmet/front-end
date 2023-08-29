import Profile from "../../../public/logo monster 1.png"

import { IconCart, Logo } from "../Icons"

import { SHeader } from "./styled"

export function Header() {
     return (
        <SHeader>
            <Logo       Profile={Profile}   Status={'On'}/>
            <IconCart   Number={2}          Status={'Open'}/>
        </SHeader>
     )
 }
 