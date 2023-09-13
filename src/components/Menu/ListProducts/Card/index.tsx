'use client'

import * as S from "./styled"

import * as useStore from '@/hooks/useStore'

import Lanche from "../../../../../public/Photo-Burguer.png"

import Image from "next/image"

import { ButtonAdd } from "@/components/Button"

import { usePersistedState } from '@/utils/usePersist'


export function Card({Product, N}: any) {
     const [ cart, setCart] = usePersistedState(`${Product.id}`,true)

     const addCart = useStore.Cart((state:any) => state.addCart)
     const remCart = useStore.Cart((state:any) => state.remCart)

     const handleClick = () => {
          setCart(!cart)

          if(cart){
               addCart(Product)
          }else{
               remCart(Product)
          }
     }

     return (
          <S.CardDefault $Delay={`swing-in-left-fwd 1.${N}s both linear`} $isCard={cart}>
               <S.ContainerCard $isCard={cart}>
                    <Image className={"Photo"} src={Lanche} alt="Foto do lanche" />
                    <S.Infos>
                         <S.Text as='h2' $isCard={cart}>{Product.name}</S.Text>
                         <S.Text as='h4' $isCard={cart}>
                              <span>
                                   {Product.price.toLocaleString('pt-br',{
                                        style: 'currency',
                                        currency: 'BRL'
                                   })}    
                              </span>
                         </S.Text>
                    </S.Infos>
                    <ButtonAdd onClick={handleClick} ConfigCss={"configBttnCls"} Status={cart}/>
                    <S.Type $isCard={cart}>
                         <S.Text  $isCard={cart}>Artesanal</S.Text>
                    </S.Type>
               </S.ContainerCard>
          </S.CardDefault>
     )
}


// export function Card({Product, N}: any) {
//      const { useCartStore } = useContext(ScreenHomeContext)
     
//      const addCart = useCartStore((state:any) => state.addCart)
//      const remCart = useCartStore((state:any) => state.remCart)

//      // const [ cart, setCart] = usePersistedState(`${Product.id}`,true);
//      //TODOS: Passe esse persist para Zustand, o carrinho também tem que ficar no localStorage
     
//      function usePersistedState<T>(key: string, initialState: T): Response<T> {
//           const [state, setState] = useState(() => {
//             const storageValue = localStorage.getItem(key);
        
//           if (storageValue) {
//               return JSON.parse(storageValue);
//             } else {
//               return initialState;
//             }
//           });
        
//           useEffect(() => {
//             localStorage.setItem(key, JSON.stringify(state));
//           }, [key, state]);
        
//           return [state, setState];
//           //TODOS: Passe esse persist para Zustand,
          
//      }

//      const lcl = "nome_dinamico"; // Defina o valor dinâmico aqui

//      const config = {
//           name: lcl,
//           getStorage: () => localStorage,
//      };

//      const useButtonStore = create(persist(
//           (set:any, get: any) => ({
//                status: false,
//                lcl: 0,

//                changeStatus: (stts: boolean) => set({ status: stts})
//           }),
//           config
//      ))

//      const cart = useButtonStore((state:any) => state.status)
//      const setCart = useButtonStore((state:any) => state.changeStatus)
        
//      const handleClick = (cart: any, Product: Product) => {
//           setCart(!cart)

//           if(cart){
//                addCart(Product)
//           }else{
//                remCart(Product)
//           }
//      }
    
      

//      return (
//           <SCardDefault $Delay={`swing-in-left-fwd 1.${N}s both linear`} $isCard={cart}>
//                <SContainerCard $isCard={cart}>
//                     <Image className={"Photo"} src={Lanche} alt="Foto do lanche" />
//                     <SInfos>
//                          <SText as='h2' $isCard={cart}>{Product.name}</SText>
//                          <SText as='h4' $isCard={cart}>
//                          <span>
//                               {Product.price.toLocaleString('pt-br',{
//                                    style: 'currency',
//                                    currency: 'BRL'
//                               })}    
//                          </span>
//                          </SText>
//                     </SInfos>
//                     <ButtonAdd onClick={()=>handleClick(cart, Product)} ConfigCss={"configBttnCls"} Status={cart}/>
//                     <SType $isCard={cart}>
//                          <SText  $isCard={cart}>Artesanal</SText>
//                     </SType>
//                </SContainerCard>
//           </SCardDefault>
//      )
// }

