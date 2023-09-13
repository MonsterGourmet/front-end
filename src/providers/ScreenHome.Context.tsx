'use client'
import { create } from "zustand";

import { createContext, useState } from "react";

import * as TC from "./Types/context";

import { Actions, Product, State, StateCart } from "./Types/interface";
import { persist, createJSONStorage } from "zustand/middleware";

export const ScreenHomeContext = createContext({} as TC.HomeContext)

const HomeProvider = ({ children }: any) => {
  // const ISModal:State = {
  //     sttsModal: false,
  //     infoModal:{
  //         type: '',
  //         Model: ''
  //     },
  // }
  // const ISMenu = {
  //   optionBar: 'Burguer'
  // }
  // const ISCart:StateCart = {
  //   cart: [],
  //   sttsCart: 'null',
  //   countCart: 0,
  // }

  // const useModalStore = create<State & Actions>((set: any) => ({
  //   ...ISModal,

  //   alteredSttsModal: (stts: boolean) => set({ sttsModal: stts }),
  //   alteredInfoModal: (info: any) => set({ infoModal:{ type: info.type, Model: info.Model}}),
  // }))

  // const useMenuStore = create((set: any) => ({
  //   ...ISMenu,
    
  //   setOptionMenu: (optn: string) => set({ optionBar: optn }),
  // }))

  // const useCartStore = create(persist(
  //   (set:any, get: any) => ({
  //     ...ISCart,

  //     addCart: (item: Product) => set((state: any) => ({ cart: [item, ...state.cart] })),
  //     remCart: (item: Product) => {
  //         const cart = get().cart
  //         const newCart = cart.filter( (Prdct: any) => Prdct !== item)
  //         set(() => ({ cart: [...newCart] }))
  //     },

  //     setSttsCart:(stts: boolean) => set({ sttsModal: stts }),
  //     setAddCountCart:(qtdd: number) =>  set({ countCart: get().countCart + qtdd }),
  //     setRemCountCart:(qtdd: number) =>  set({ countCart: get().countCart - qtdd }),
  //   }),
  //   {
  //     name: "useCartStore",
  //     getStorage: () => localStorage
  //   }
  // ))

  return ( 
    <ScreenHomeContext.Provider 
      value={{}}> {children} 
    </ScreenHomeContext.Provider>     
  )
}

export default HomeProvider;

// addTodo: (text) =>
//         set((state) => ({
//             todos: [
//                 ...state.todos,
//                 {
//                     id: Date.now(),
//                     text,
//                     completed: false,
//                 },
//             ],
//         })),