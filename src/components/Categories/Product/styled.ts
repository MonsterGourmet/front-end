'use client'
import { styled } from "styled-components";

const SProduct = styled.li`
     min-width: 166px;
     height: 280px;

     padding: 12px 0 6px 12px;

     position: relative;

     overflow: hidden;

     cursor: pointer;

     border-radius: 20px;
     border: 2.5px solid #F0F0F0; //TODOS: Trocar por var

     background-color: var(--color-Brand1-75);

     transition: 200ms linear;

     flex-direction: column;
     align-items: center;
     display: flex;

     animation:swing-in-top-fwd 2s cubic-bezier(.175,.885,.32,1.275) both;

     &:hover{
          background-color: var(--color-Brand1);

          box-shadow: 0px 5px 5px 0px var(--color-DropShow);

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

     h1{
          font-weight: 700;
          font-size: 25px;

          text-shadow: 2.5px 2.5px var(--color-Brand1-75);

          line-height: 39px;
          
          align-self: flex-start;

          color: var(--color-White)
     }
`
const SFigure = styled.figure`
     height: 200px;
     width: 200%;

     margin: 0 auto;

     position: absolute;
     bottom: 0;
    
     overflow: hidden;

     img{ height: 100%; width: 100%; }
`
export { SProduct, SFigure }