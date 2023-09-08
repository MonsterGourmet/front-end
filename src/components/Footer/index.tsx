import { LogoText, Signature } from "@/assets/Logo";
import { SContainerFooter, SFooter, SText } from "./styled";

export function Footer() {
     return (
          <SFooter>
               <SContainerFooter>
                    <LogoText />
                    <SText>
                         <span>Localizada:</span> Pojuca-BA, Rua Antonio Mota
                    </SText>
                    <Signature />
               </SContainerFooter>
          </SFooter>
     )
}