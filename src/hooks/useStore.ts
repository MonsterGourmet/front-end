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
    address: {},
    sttsCart: 'null',
    countCart: 0,
    valueSub: 0,
    valueTotal: 0,
    valueDelivery: 0,
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
  alteredInfoModal: (info: any) => set({ infoModal: { type: info.type, Model: info.Model } }),
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
        time: new Date().getHours(),
        value: item.price,
        ...item,
        qtdd: 1,
      }
      set((state: any) => ({ cart: [addInfoItem, ...state.cart] }))
    },
    remCart: (item: Product) => {
      const newCart = get().cart.filter((Prdct: any) => Prdct.name !== item.name)
      set(() => ({ cart: [...newCart] }))
    },
    moreItem: (item: any) => {
      const updatedCart = get().cart.map((cartItem: any) => {
        if (cartItem.name === item.name) {
          const newQuantity = cartItem.qtdd + 1;
          return {
            ...cartItem,
            qtdd: newQuantity,
            value: cartItem.price * newQuantity,
          };
        }
        return cartItem;
      });

      set(() => ({ cart: updatedCart }));
    },
    lessItem: (item: any) => {
      const updatedCart = get().cart.map((cartItem: any) => {
        if (cartItem.name === item.name && cartItem.qtdd > 1) {

          const newQuantity = cartItem.qtdd - 1;
          return {
            ...cartItem,
            qtdd: newQuantity,
            value: cartItem.price * newQuantity, 
          };
        }
        return cartItem;
      });

      set(() => ({ cart: updatedCart }));
    },
    setterAddress: (setAddress: any) => set({ address: {...setAddress}})
  }),
  {
    name: "@MonsterGourmet(useStoreCart)",
    getStorage: () => localStorage
  }
))

export { Cart, Menu, Modal }



      // const index = get().cart.findIndex((Prdct: any) => Prdct.name === item.name)
      // console.log(index)

      // const list =  get().cart

      // console.log(list)

      // const Product = item

      // const newProduct = {
      //   ...Product,
      //   qtdd: +1,
      //   name: 'alterado',
      // } 

      // list[index] = newProduct

      // console.log(list)

      // get().cart.filter((Prdct: any) => {
      //   if(Prdct.id === id){
      //     console.log(Prdct)
      //     Prdct.qtdd = + 1
      //     console.log(Prdct)
      //     // set((state) => ({ fishes: state.fishes + 1 })),

      //   }
      // })
