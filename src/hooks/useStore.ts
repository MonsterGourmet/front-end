import { create } from "zustand";

import { persist, createJSONStorage } from 'zustand/middleware'

import { useHref, useNavigate } from 'react-router-dom';

// import { Product } from "@/providers/Types/interface";
import { IMdl_StateAction, IMnu_StateAction } from "./types";
import { IDefaultProduct } from "@/types";

const initialState = {
  Cart: {
    cart: [],
    address: {},
    sttsCart: 'null',
    observation: '',
    countCart: 0,
    change: 0,
    payment: '',
    valueSub: 0,
    valueTotal: '',
    valueDelivery: '',
  },
  Modal: {
    sttsModal: false,
    infoModal: {
      type: '',
      Model: ''
    }
  },
  Menu: {
    optionBar: 'Artesanais'
  }
}

interface info {
  type: string,
  Model: string
}
const Modal = create<IMdl_StateAction>((set: any) => ({
  ...initialState.Modal,

  alteredSttsModal: (stts: boolean) => set({ sttsModal: stts }),
  alteredInfoModal: (info: info) => set({ infoModal: { type: info.type, Model: info.Model } }),
}))

const Menu = create<IMnu_StateAction>((set: any) => ({
  ...initialState.Menu,

  setOptionMenu: (optn: string) => set({ optionBar: optn }),
}))

const Cart = create(persist(
  (set: any, get: any) => ({
    ...initialState.Cart,

    
    setterSub: (setPayment: any) => set({ valueSub: setPayment }),
    setterTotal: (setPayment: any) => set({ valueTotal: setPayment }),
    setterChange: (setPayment: any) => set({ change: setPayment }),
    setterPayment: (setPayment: any) => set({ payment: setPayment }),
    setterAddress: (setAddress: any) => set({ address: { ...setAddress } }),
    setterObservation: (setObservation: string) => set({ observation: setObservation}),

    addCart: (item: IDefaultProduct) => {
      const addInfoItem = {
        ...item,
        value: item.price,
        qtdd: 1,
      }

      set((state: any) => ({ cart: [addInfoItem, ...state.cart] }))
    },
    remCart: (item: IDefaultProduct) => {
      const newCart = get().cart.filter((Prdct: any) => Prdct.name !== item.name)
      set(() => ({ cart: [...newCart] }))
    },
    addValueDelivery: () => {
            
      const neighborhood = get().address.bairro

      const findIndex = neighborhood.indexOf('-')

      const value = neighborhood.slice(findIndex + 1, neighborhood.lenght) 

      set(() => ({ valueDelivery: value }))

      console.log(get().valueDelivery)

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

      const subTotal = get().cart.reduce((acc: any, num:any) => acc + num.value,0)
      const vleTotal = get().valueDelivery + get().valueSub 

      console.log(vleTotal)
    
      set(() => ({ cart: updatedCart }))
      set(() => ({ valueSub: subTotal }))
      set(() => ({ valueTotal: vleTotal }))
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
      const subTotal = get().cart.reduce((acc: any, num:any) => acc + num.value,0)
      const vleTotal = get().valueSub + get().valueDelivery 

      set(() => ({ cart: updatedCart }));
      set(() =>({ valueSub: subTotal }))
      set(() =>({ valueTotal: vleTotal }))
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
      order += `Bairro - ${get().address.bairro} \n`
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

      const getValueSub = get().cart.reduce((acc: any, num:any) => acc + num.value,0)
      const getValueDelivery = get().valueDelivery
      const getValueTotal = getValueSub + getValueDelivery

      order += itens

      order += '\n'

      order += `Observações enviadas: ${get().observation} \n`

      order += '\n'

      order += '----------------------------------------- \n'

      order += '          Pagamento\n'
      order += '\n'

      order += `SubTotal: ${getValueSub.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })} \n`

      order += '\n'

      order += `Entrega: ${getValueDelivery.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })} \n`

      order += '\n'

      order += `Total: ${getValueTotal.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })} \n`

      order += '\n'

      order += `Tipo de pagamento - ${get().payment} \n`

      order += '\n'

      const methodPayment = get().payment

      if(methodPayment === 'Dinheiro'){
        order += `Troco - R$ ${get().change.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        })} \n`  
      }

      order += '\n'

      console.log(order)
      let encode = encodeURI(order);

      let URL = `https://wa.me/${71999099688}?text=${encode}`;

      const openExternalLink = (url: any) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank'; // Abre o link em uma nova aba/janela
        link.click();
      };

      openExternalLink(URL)

    },

  }),
  {
    name: "@MonsterGourmet(useStoreCart)",
  }
))

export { Cart, Menu, Modal }
