import { StaticImageData } from "next/image"

export interface Il {
    readonly status?: 'On' | 'Off';
}

export interface iButton  {
     readonly status: 'Open' | 'Close';
}

export interface ILogo {
     readonly Profile: StaticImageData,
     readonly Status: 'On' | 'Off';
}

export interface Type {
     Number: number;
     Status: 'Open' | 'Close' 
}


