export type State = {
     sttsModal: boolean
     infoModal: {
           type: string,
           Model: string
     }
}

export type StateCart = {
     cart: Product[],
     sttsCart: string,
     countCart: number,
}
 
export type Actions = {
     alteredSttsModal: (stts: boolean) => any,   
     alteredInfoModal: (info: any) => any,
}

export interface Product {
     id: number,
     name: string,
     bread: string,
     salad: string,
     price: number,
}