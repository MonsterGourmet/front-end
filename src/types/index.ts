import { StaticImageData } from "next/image"
import { MouseEventHandler } from "react";

export interface Il {
    readonly status?: 'On' | 'Off';
}
export interface iButton  {
     readonly status: 'Open' | 'Close';
}
export interface IButton {
     text?: string;
     status?: 'Open' | 'Close' | true | false;
     configCss?: string;
     symbols?: "+" | "-";
     
     onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}
export interface ILogo {
     readonly Profile: StaticImageData,
     readonly Status: 'On' | 'Off';
}
export interface Type {
     Number: number;
     Status: 'Open' | 'Close' 
}
export interface IDefaultProduct {
     carnes: string;
     id: number;
     name: string;
     price: number;
     qtdd: number;
     value: number;
}
export interface IProductCart {
     Product:{
          carnes: string;
          id: number;
          name: string;
          price: number;
          qtdd: number;
          value: number;
     }
}
export interface ICategories {
     category: string;
     imgURL: string;
     products:  IDefaultProduct[];
}
export interface IProductCategory {
     product:{
          category: "Milk Shake";
          imgURL: "/Photo-Burguer.png";
     },
     onClick: MouseEventHandler<HTMLLIElement> | undefined;
}
