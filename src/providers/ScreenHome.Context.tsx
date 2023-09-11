'use client'
import { create } from "zustand";

import { createContext } from "react";

import { IModalContext } from "./Types/context";
import { Actions, State } from "./Types/interface";

export const ScreenHomeContext = createContext({} as IModalContext)

const HomeProvider = ({ children }: any) => {
  const initialState:State = {
      sttsModal: false,
      infoModal:{
          type: '',
          Model: ''
      },
  }

  const useModalStore = create<State & Actions>((set: any) => ({
      ...initialState,

      alteredSttsModal: (stts: boolean) => set({ sttsModal: stts }),
      alteredInfoModal: (info: any) => set({ infoModal:{ type: info.type, Model: info.Model}}),
  }))

  //TODOS: Daqui pra cima colocar em uma pasta, podemos usar o zustando como useContext e como UseState. Tente fazer injeão de dependencia.
 
    return ( 
      <ScreenHomeContext.Provider 
       value={{ useModalStore }}> {children} 
      </ScreenHomeContext.Provider>     
    )
}

export default HomeProvider;