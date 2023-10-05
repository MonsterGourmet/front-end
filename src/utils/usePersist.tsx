// import { useEffect, useState, Dispatch, SetStateAction, } from 'react'

// type Response<T> = [
//      T,   
//      Dispatch<SetStateAction<T>>,
// ];

// export function usePersistedState<T>(key: string, initialState: T): Response<T> {
//      const [state, setState] = useState(() => {

//      const getStorage = window.localStorage.getItem(key) || 'localStorage';
//      const storageValue = JSON.parse(getStorage)     

//      if (storageValue) {
//           return storageValue;
//      } else {
//           return initialState;
//      }
//      });
     
//      useEffect(() => {
//           localStorage.setItem(key, JSON.stringify(state));
//      }, [key, state]);
     
//      return [state, setState];
// }
// export function useRemPersistedState<T>(key: string, initialState: T): Response<T> {
//      const [state, setState] = useState(() => {

//           const getStorage = window.localStorage.getItem(key) || 'localStorage';
//           const storageValue = JSON.parse(getStorage)
     
//      if (storageValue) {
//           return JSON.parse(storageValue);
//      } else {
//           return initialState;
//      }
//      });
     
//      useEffect(() => {
//           localStorage.setItem(key, JSON.stringify(state));
//      }, [key, state]);
     
//      return [state, setState];
// }
// import { Dispatch, SetStateAction, } from 'react'

import { create } from 'zustand'

import { persist } from 'zustand/middleware'

export function useRemPersistedState<T>(key: any, initialState: any) {
     const useStore = create<any>(persist(
          (set) => ({
          cart: initialState,

          setCart: (newCart: any) => {
               set({ cart: newCart });
          },
       }), 
       {
         name: `${key}`, 
       })
     );
   
     const { cart, setCart } = useStore();
   
     return [cart, setCart] as const;
}

export function usePersistedState<T>(key: any, initialState: any) {
     const useStore = create<any>(persist(
          (set) => ({
          cart: initialState,

          setCart: (newCart: any) => {
           set({ cart: newCart });
          },
       }), 
       {
         name: `${key}`, 
       })
     );
   
     const { cart, setCart } = useStore();
   
     return [cart, setCart] as const;
}