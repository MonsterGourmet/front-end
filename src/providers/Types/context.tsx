import { Dispatch, SetStateAction } from "react";

import { StoreApi, UseBoundStore } from "zustand";
import { Actions, State } from "./interface";

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
export interface IModalContext{
     useModalStore: UseBoundStore<StoreApi<State & Actions>>
}