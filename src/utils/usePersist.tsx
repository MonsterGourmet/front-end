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
import { useEffect, useState, Dispatch, SetStateAction, } from 'react'

type Response<T> = [
     T,   
     Dispatch<SetStateAction<T>>,
];

export function usePersistedState<T>(key: string, initialState: T): Response<T> {
     const [state, setState] = useState(() => {
          const storageValue = window.localStorage.getItem(key);
     
     if (storageValue) {
          return JSON.parse(storageValue);
     } else {
          return initialState;
     }
     });
     
     useEffect(() => {
          localStorage.setItem(key, JSON.stringify(state));
     }, [key, state]);
     
     return [state, setState];
}
export function useRemPersistedState<T>(key: string, initialState: T): Response<T> {
     const [state, setState] = useState(() => {
          const storageValue = window.localStorage.getItem(key);
     
     if (storageValue) {
          return JSON.parse(storageValue);
     } else {
          return initialState;
     }
     });
     
     useEffect(() => {
          localStorage.setItem(key, JSON.stringify(state));
     }, [key, state]);
     
     return [state, setState];
}