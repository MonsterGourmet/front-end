'use client'

import { styled } from "styled-components";

const SCategorie = styled.section`
     height: 355px;
     width: 100%;
`
const SContainerCatagorie = styled.section`
     height: 100%;
     width: var(--container-Width);

     padding: 5px 10px;
     margin: 20px 0;

     justify-content: center;
     flex-direction: column;
     align-items: center;
     display: flex;
     gap: 10px;
`
const SListProductsHorizontal = styled.ul`
     height: 344px;
     width: 100%;

     padding: 0 5px;

     overflow-x: auto;
     
     flex-direction: row;
     align-items: center;
     display: flex;
     gap: 10px;
`

export { SCategorie, SContainerCatagorie, SListProductsHorizontal }