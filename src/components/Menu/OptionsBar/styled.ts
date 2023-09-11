'use client'

import { styled } from "styled-components";

const NavBarHorizontal = styled.nav`
     height: 60px;
     width: 100%;

     border: 1px solid transparent;

     justify-content: center;
     align-items: center;
     display: flex;

     ul{
          height: 100%;
          width: 100%;

          padding: 0 3px;
          overflow-x: auto;

          border: 1px solid transparent;

          flex-direction: row;
          align-items: center;
          display: flex;
          gap: 10px;
          
          overflow-y: hidden;

    }

    ::-webkit-scrollbar {
          height: 1px;               
     }
     ::-webkit-scrollbar-track {
          background-color: transparent;        
     }

     /* @media screen and (min-width: 768px) {
          ::-webkit-scrollbar {
               height: 10px;               
          }
          ::-webkit-scrollbar-track {
               background-color: red;        
          }  
     } */
`
const Option = styled.li`
     height: 40px;
     min-width: 130px;

     transition: 200ms linear;

     border-radius: 20px;
     border: 1px solid #F77A20; //TODOS: Trocar para variable  

     box-shadow: 0px 1px 1px 0px var(--color-DropShow);

     background-color: var(--color-White);
     color: var(--color-Brand1);

     justify-content: center;
     align-items: center;
     display: flex;

     cursor: pointer;

     .Icon{
          display: none;   
          
          height: 40px;
          width: 50px;

          border-radius: 100%;

          color: var(--color-Brand1);

          animation:slide-in-blurred-right 250ms both;

          overflow: hidden;
     }

     &:hover{
          margin-top: -10px;

          box-shadow: 0px 3px 3px 0px var(--color-DropShow);

          background-color: var(--color-Brand1);
          color: var(--color-White);

          .Option{
               display: none;
          }
          .Icon{
               display: block;     
          }
     }

     @keyframes slide-in-blurred-right{
          0%{
               transform:translatey(50px);
               transform-origin:0 50%;
               filter:blur(40px);
               opacity:0
          }
          100%{
               transform:translatey(0);
               transform-origin:50% 50%;
               filter:blur(0);opacity:1
          }
     }
`

export { NavBarHorizontal, Option }