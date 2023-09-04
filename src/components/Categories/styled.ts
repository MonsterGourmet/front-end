'use client'
import { styled } from "styled-components";


const SContainer = styled.section`
     height: 355px;
     width: 100%;

     padding: 5px 0;
     /* border: 1px solid black; */

     justify-content: center;
     flex-direction: column;
     align-items: center;
     display: flex;
     gap: 10px;
`

const SListProductsHorizontal = styled.ul`
     height: 344px;
     width: 100%;

     /* border: 1px solid tr; */

     padding: 0 5px;

     overflow-x: auto;
     
     flex-direction: row;
     align-items: center;
     display: flex;
     gap: 10px;
`

export { SContainer, SListProductsHorizontal }