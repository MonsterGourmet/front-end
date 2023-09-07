import { Open_Sans } from "next/font/google";
import { ButtonContact } from "../Button";
import { SContact, SInfo, SText } from "./styled";
import { IconTell } from "../Icons";


const Opens = Open_Sans({ subsets: ['latin'] })

export function Information() {
     return (
          <SInfo>          
               <SText as='h1'>Escolha seu lanche <span>favorito</span></SText>
               <SText>Aproveite nosso cardapio, realize seu pedido pelo site, e será levado a concluir no nosso Zap de forma <span>rápida</span> e <span>segura</span>.</SText>
               <SText>Funcionando <span>das 17:00 ás 23:00</span>.</SText>
               <SText>De <span>quarta á domingo</span> </SText>
               <SContact> 
                    {/* Grid p/ dividir */}
                    <IconTell />
                    <ButtonContact text='7199909688' />
               </SContact>
          </SInfo>

     )
}