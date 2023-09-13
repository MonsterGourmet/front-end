import { StoreApi, UseBoundStore } from "zustand";
import { Actions, Product, State } from "./interface";

// type State = {
//      sttsModal: boolean
//      infoModal: {
//            type: string,
//            Model: string
//      }
// }
 
// type Actions = {
//      alteredSttsModal: (stts: boolean) => any,   
//      alteredInfoModal: (info: any) => any,
// }

export interface HomeContext{
     // useModalStore: UseBoundStore<StoreApi<State & Actions>>,

     // useMenuStore: UseBoundStore<StoreApi<{
     //      setOptionMenu: (optn: string) => any;
     //      optionBar: string;
     // }>>,

     // useCartStore: UseBoundStore<StoreApi<{
     //      addCart: (item: Product) => any;
     //      remCart: (item: Product) => void;
     //      setSttsCart: (stts: boolean) => any;
     //      setAddCountCart: (qtdd: number) => any;
     //      setRemCountCart: (qtdd: number) => any;
     //      cart: Product[];
     //      sttsCart: string;
     //      countCart: number;
     // }>>,
     
}