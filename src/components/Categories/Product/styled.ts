'use client'
import { styled } from "styled-components";

const Text = styled.p`
     font-weight: 700;
     font-size: 25px;
     line-height: 39px;

     text-shadow: 2.5px 2.5px var(--color-Brand1-75);

     align-self: flex-start;

     color: var(--color-White);

`
const Product = styled.li`
     min-width: 172px;
     height: 280px;

     position: relative;

     overflow: hidden;

     cursor: pointer;

     border-radius: 20px;
     border: 2.5px solid #F0F0F0; 

     background-image: linear-gradient(to bottom, #000000, #9B3300);

     transition: 200ms linear;
     scroll-snap-align: center;

     flex-direction: column;
     align-items: center;
     display: flex;

     animation:swing-in-top-fwd 2s cubic-bezier(.175,.885,.32,1.275) both;

     &:hover{
          background-color: var(--color-Brand1);

          box-shadow: 0px 10px 10px 0px var(--color-DropShow);

          border: 2.5px solid var(--color-White);
     }
     &:hover img{
          transition: 250ms ease-in-out;
          transform: scale(1.1);
     }
     &:not(hover) img{
          transition: 200ms linear;
          transform: scale(0.99);
     }

     @keyframes swing-in-top-fwd{0%{transform:rotateX(-100deg);transform-origin:top;opacity:0}100%{transform:rotateX(0deg);transform-origin:top;opacity:1}}     


`
const Figure = styled.figure`
     height: 200px;
     width: 200%;

     height: 100%;

     margin: 0 auto;

     position: absolute;
     bottom: 0;
    
     overflow: hidden;

     img{ height: 100%; width: 100%; }
`
export { Product, Figure, Text }