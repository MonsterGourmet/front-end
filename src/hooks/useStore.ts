import { create } from "zustand";

import { persist } from "zustand/middleware";

import { Product } from "@/providers/Types/interface";


interface IMdl_StateAction {
  sttsModal: boolean,
  infoModal: {
    type: string,
    Model: string
  },

  alteredSttsModal: (stts: boolean) => any,   
  alteredInfoModal: (info: any) => any,
}

interface IMnu_StateAction {
  optionBar: string,

  setOptionMenu: (optn: string) => any
}

const initialState = {
  Cart: {
    cart: [],
    sttsCart: 'null',
    countCart: 0,
  },
  Modal: {
    sttsModal: false,
    infoModal: {
      type: '',
      Model: ''
    }
  },
  Menu: {
    optionBar: 'Burguer'
  }
}

const Modal = create<IMdl_StateAction>((set: any) => ({
...initialState.Modal,

alteredSttsModal: (stts: boolean) => set({ sttsModal: stts }),
alteredInfoModal: (info: any) => set({ infoModal:{ type: info.type, Model: info.Model}}),
}))

const Menu = create<IMnu_StateAction>((set: any) => ({
...initialState.Menu,

setOptionMenu: (optn: string) => set({ optionBar: optn }),
}))

const Cart = create(persist(
  (set: any, get: any) => ({
    ...initialState.Cart,

    addCart: (item: Product) => {
        const addInfoItem = {
          qtdd: 0,
          time: new Date().getHours(),
          value: item.price,
          ...item
        }
        set((state: any) => ({ cart: [ addInfoItem, ...state.cart ] }))
    },

    remCart: (item: Product) => {
        // const cart = get().cart
        const newCart = get().cart.filter( (Prdct: any) => Prdct.name !== item.name)
        set(() => ({ cart: [...newCart] }))
    },
  }),
  {
    name: "@MonsterGourmet(useStoreCart)",
    getStorage: () => localStorage
  }
))

export { Cart, Menu, Modal }
