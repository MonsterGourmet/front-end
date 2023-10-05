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
`

const Text = styled.p`
     height: 50px;
     width: 150px;

     display: block;

     margin-top: 10px;

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

export { ContainerMenu, Text }