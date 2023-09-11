'use client'

import { styled } from "styled-components";

const Categorie = styled.section`
     height: 380px;
     width: 100%;
`
const ContainerCategorie = styled.div`
     height: 100%;
     width: var(--container-Width);

     padding: 5px 10px;
     margin: 20px 0;

     justify-content: center;
     flex-direction: column;
     align-items: center;
     display: flex;
     gap: 10px;

     ::-webkit-scrollbar {
          height: 1px;               
     }
     ::-webkit-scrollbar-track {
          background-color: transparent;        
     }

`
const ListProductsHorizontal = styled.ul`
     height: 344px;
     width: 100%;

     padding: 0 5px;

     overflow-x: auto;
     
     flex-direction: row;
     align-items: center;
     display: flex;
     gap: 10px;
`


export { Categorie, ContainerCategorie, ListProductsHorizontal }