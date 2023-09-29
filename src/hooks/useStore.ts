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
    change: 0,
    payment: '',
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

    closeCart: () => {
      const time = new Date();
      const cart = get().cart;

      let order = '';
      let itens = '';

      order += '          Monster Gourmet Express     \n'
      order += '        Rua XXXXXXXXXXXXXX  n:XX  \n'
      order += '----------------------------------------- \n'
      order += `Pedido realizado ${time.getDate()}/${time.getMonth()}/${time.getFullYear()} ás ${time.getHours()}:${time.getMinutes()} \n`
      order += '\n'
      order += '***Este não é um documento fiscal*** \n'
      order += '\n'

      order += '----------------------------------------- \n'

      order += '          Endereço\n'
      order += '\n'

      order += `N Casa - ${get().address.numberHouse} \n`
      order += `Rua - ${get().address.street} \n`
      order += `Bairro - ${get().address.street} \n`
      order += `Complemento - ${get().address.complement} \n`
      order += `Ponto de referencia - ${get().address.pointReference} \n`
      order += '\n'

      order += '----------------------------------------- \n'

      order += '          Pedido\n'
      order += '\n'

      order += '| ITEM | DESC | QTDE | UN | VL. UNIT | VL. TOTAL |\n'
      order += '\n'

      cart.forEach((item: any, index: number) => {
        itens += `${index + 1} ${item.name} - ${item.qtdd}x - R$ ${item.price.toFixed(2).replace('.', ',')}|R$ ${item.value.toFixed(2).replace('.', ',')} \n`
        itens += '\n'
      })

      order += itens

      order += '----------------------------------------- \n'

      order += `SubTotal: ${get().cart.reduce((acc: any, num: any) => acc + num.value, 0).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })} \n`

      order += `Entrega: ${get().cart.reduce((acc: any, num: any) => acc + num.value, 0).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })} \n`

      order += `Total: ${get().cart.reduce((acc: any, num: any) => acc + num.value, 0).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })} \n`

      order += '----------------------------------------- \n'

      order += '          Pagamento\n'
      order += '\n'

      
      console.log(get().payment)
      console.log(get().change)

      
      order += `Tipo de pagamento - ${get().payment} \n`

      const methodPayment = get().payment

      console.log(methodPayment)

      if(methodPayment === 'Dinheiro'){
        order += `Troco - R$ ${get().change.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })} \n`  
      }

      order += '\n'
      console.log(get().address)

      console.log(order)
    },

    setterAddress: (setAddress: any) => set({ address: { ...setAddress } }),
    setterPayment: (setPayment: any) => set({ payment: setPayment }),
    setterChange: (setPayment: any) => set({ change: setPayment }),
    setterSub: (setPayment: any) => set({ valueSub: setPayment }),
    setterTotal: (setPayment: any) => set({ valueTotal: setPayment }),
  }),
  {
    name: "@MonsterGourmet(useStoreCart)",
    getStorage: () => localStorage
  }
))

export { Cart, Menu, Modal }
