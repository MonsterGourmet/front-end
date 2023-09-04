import { ButtonCategory } from "@/components/Button";
import { SHorizontalNavBar } from "./style";

export function Options() {
     return (
          <SHorizontalNavBar>
               <ButtonCategory text='Batata Frita' />
               <ButtonCategory text='Burguers' />
               <ButtonCategory text='Bebidas' />
          </SHorizontalNavBar>
     )
}