import { Irish_Grover, Open_Sans } from "next/font/google"
import { SContainer, SContainerLT, SFigure, SText } from "./styled"
import Link from "next/link"

const Irish = Irish_Grover({ weight: '400', subsets: ['latin']})

const Open = Open_Sans({subsets: ['latin']})

export function LogoText(): JSX.Element {
     return (
          <SContainerLT style={Irish.style}>
               <SText> Monster</SText>
               <SText> Gourmet</SText>
               <SText> Express</SText>
          </SContainerLT>
     )
}
export function Signature(): JSX.Element {
     return (
          <SContainer style={Open.style }>
               <SText>
                    UI|UX|Desenvolvedor - 
               </SText>
               <SText>
                    <Link href="" target="_blank">Bruno Abreu</Link>
               </SText>
          </SContainer>
     )
}