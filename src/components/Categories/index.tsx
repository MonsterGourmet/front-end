import { SText } from "../Info/styled";
import { loadDataOnCategory } from "../../../database/server";

import { SCategorie, SContainerCatagorie, SListProductsHorizontal } from "./styled";
import { Product } from "./Product";


export function Categories() {
      const removeDrinks = loadDataOnCategory.filter( category => category.category !== 'Bebidas' )       //TODOS: Transform in function

      return (
        <SCategorie>
            <SContainerCatagorie>
                  <SText as={'h1'}><span>Categorias</span></SText>
                  <SListProductsHorizontal>
                     {
                        removeDrinks.map( item => (
                           <Product key={item.category} product={item} />
                        ))
                     }
                  </SListProductsHorizontal>
            </SContainerCatagorie>
        </SCategorie>
     )
}