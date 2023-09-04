import { SText } from "../Info/styled";
import { Product } from "./Product";
import { SContainer, SListProductsHorizontal } from "./styled";
import { loadDataOnCategory } from "../../../database/server";
import Hamburguer from "../../../public/Photo-Potatos.png"

const Produto1 = {
   imgURL: '../../../public/Photo-Potatos.png',
   name: 'Burguers',
   price: 22.9,
}

interface ICategory{
   imgURL: '../../../public/Photo-Potatos.png',
   name: 'Burguers',
}


export function Categories() {
     return (
        <>
         <SContainer>
               <SText as={'h1'}><span>Categorias</span></SText>
               <SListProductsHorizontal>
                  {
                     loadDataOnCategory.map( item => (
                        <Product key={item.category} product={item} />
                     ))
                  }
               </SListProductsHorizontal>
         </SContainer>
        </>

     )
}