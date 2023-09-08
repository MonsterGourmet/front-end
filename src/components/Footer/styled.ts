'use client'

import { styled } from "styled-components"

const SText = styled.p`
     color: var(--color-White);

     span{
          color: var(--color-Brand1);

          font-weight: 400;
     }
`

const SFooter = styled.footer`
     height: 200px;
     width: 100%;

     background-color: var(--color-Grey0);
`
const SContainerFooter = styled.div`
     height: 100%;
     width: var(--container-Width);

     background-color: transparent;

     justify-content: space-evenly;
     flex-direction: column;
     align-items: center;
     display: flex;
`
export { SText, SFooter, SContainerFooter } 