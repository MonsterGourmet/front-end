'use client'
import { styled } from "styled-components";

const SContainerMenu = styled.section`
     height: 700px;
     width: 100%;

     border: 2px solid transparent;

     justify-content: flex-start;
     flex-direction: column;
     align-items: center;
     display: flex;
`

const SText = styled.p`
     font-size: 20px;
     font-weight: 500;
     line-height: 30px;

     span{
          color: var(--color-Brand1);

          letter-spacing: .2px;
          font-weight: 700;
          line-height: 39px;
     }
`

export { SContainerMenu, SText }