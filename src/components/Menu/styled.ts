'use client'

import { styled } from "styled-components";

const SContainerMenu = styled.section`
     height: 500px;
     width: 100%;

     padding: 15px;

     justify-content: flex-start;
     flex-direction: column;
     align-items: center;
     display: flex;
     gap: 10px;
`
const SText = styled.p`
     font-weight: 400;

     span{
          color: var(--color-Brand1);

          font-weight: 700;
     }
`
export { SContainerMenu, SText }