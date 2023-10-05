import { StaticImageData } from "next/image";

export interface Button  {
     status: 'Open' | 'Close';
}

export interface Logo {
     Profile: StaticImageData,
     Status: 'On' | 'Off';
}

export interface Type {
     Number: number;
     Status: 'Open' | 'Close' 
}

export interface Il {
     status: 'On' | 'Off';
}

