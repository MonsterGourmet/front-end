'use client'

import { styled } from "styled-components";
import { Product } from "./Product/styled";

const Categorie = styled.section`
     height: 380px;
     width: 100%;
`
const Text = styled.p`
     height: 50px;
     width: 100px;

     display: block;

     border-radius: 20px;
     border: 1px solid transparent;

     span{
          color: var(--color-Brand1);

          font-weight: 700;
     }
     
     background-image: linear-gradient( 90deg, #ccc 0px, rgb(229 229 229 / 90%) 40px, #ccc 80px);

     background-position: 100% 0 ;
     background-size: 300%;

     animation: shimmer 1s infinite;
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

     overflow-x: scroll;
     scroll-snap-type: 'x mandatory';
     
     flex-direction: row;
     align-items: center;
     display: flex;
     gap: 10px;
     
     /* &:hover > ${Product}:not(:hover) {
          filter: blur(10px);
          transform: scale(0.9, 0.9);
     } */
`


export { Categorie, Text, ContainerCategorie, ListProductsHorizontal }