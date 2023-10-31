'use client'
import { styled } from "styled-components";

const ContainerMenu = styled.main`
     height: 700px;
     width: 100%;

     margin: 20px 0;

     justify-content: flex-start;
     flex-direction: column;
     align-items: center;
     display: flex;

     @media screen and ( min-width: 700px ) {
          padding: 0 200px;
     }
`

const Text = styled.p`
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

export { ContainerMenu, Text }