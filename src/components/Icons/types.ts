import { StaticImageData } from "next/image";

export interface iButton  {
     status: 'Open' | 'Close';
}

export interface ILogo {
     Profile: StaticImageData,
     Status: 'On' | 'Off';
}

export interface Type {
     Number: number;
     Status: 'Open' | 'Close' 
}

export type ILogoOnly = Pick<ILogo, 'Status'>

