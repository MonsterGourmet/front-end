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
`
const Option = styled.li`
     height: 40px;
     min-width: 130px;

     transition: 200ms linear;

     border-radius: 20px;
     border: 1px solid transparent; //TODOS: Trocar para variable  

     box-shadow: 0px 1px 1px 0px var(--color-DropShow);

     background-image: linear-gradient( 90deg, #ccc 0px, rgb(229 229 229 / 90%) 40px, #ccc 80px);

     background-position: 100% 0 ;
     background-size: 300%;

     animation: shimmer 1s infinite;
`

export { NavBarHorizontal, Option }