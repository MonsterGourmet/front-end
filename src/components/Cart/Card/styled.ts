'use client'

import { styled } from "styled-components";

interface CardProps {
     readonly $isCard?: boolean;
     readonly $Delay?: any;
}

const Text = styled.p<CardProps>`
     font-size: 1.5rem;
     font-weight: 300;

     color: var(--color-Grey0);

     h2{
          font-weight: 300;
     }
    
     span{
          color: var(--color-Brand1);

          font-size: 1.12rem;
          font-weight: 500;
     }    
`
const Type = styled.div`
     height: 22px;
     width: 120px;

     border-radius: 10px;
     border: 1px solid transparent;

     position: absolute;
     right: -2px; bottom: 0px;

     background-color: var(--color-Brand1-75);

     justify-content: center;
     flex-direction: column;
     align-items: center;
     display: flex;

     animation:slide-in-right 300ms cubic-bezier(.25,.46,.45,.94) both;  

     ${Text}{
          font-size: 17px;
          font-weight: 500;
          line-height: 22px;

          color: var(--color-Brand1);
     }

     @keyframes slide-in-right{0%{transform:translateX(10px);opacity:0}100%{transform:translateX(0);opacity:1}}
`
const Infos = styled.div`
     height: 130px;
     width: 157px;

     border-radius: 10px;
     border: 2px solid transparent;

     padding: 0 5px;

     position: relative;

     justify-content: flex-start;
     flex-direction: column;
     align-items: flex-start;
     display: flex;
     gap: 5px;   
`
const CardDefault = styled.li`
     min-height: 145px;
     width: 100%;
     
     transition: 200ms ease-in;
     
     border-radius: 20px;
     border: 1px solid var(--color-Brand1);

     background-color: var(--color-White);
     box-shadow: 0px 5px 5px 0px var(--color-DropShow);

     padding: 5px;

     flex-direction: column;
     justify-content: center;
     align-items: center;
     display: flex;
`
const ContainerCard = styled.div`
     height: 130px;
     width: 100%;

     flex-direction: row;
     align-items: flex-start;
     display: flex;

     position: relative;

     border: 1px solid transparent;

     .Photo{
          transition: 250ms ease-out;

          width: 102px;
          height: 93px;
          
          border-radius: 10px;
          border: 2px solid transparent;

          background-color: var(--color-Brand1-75);
     } 
     .configBttnCls{
          position: absolute;
          right: 0;
     }   
     figure{
          width: 100px;
          height: 90px;

          transition: 250ms ease-out;

          border: 2px solid transparent;
          position: relative;

          background-color: 'var(--color-White)';
     }
`
const BoxCount = styled.div`
     height: 30px;
     width: 140px;

     border-radius: 10px;
     border: 1px solid transparent;

     position: absolute;
     left: 0px; bottom: 0px;

     padding: 0 5px;


     background-color: rgba(247, 122, 32, 0.15);
     
     justify-content: space-between;
     flex-direction: row;
     align-items: center;
     display: flex;

     animation:slide-in-right 300ms cubic-bezier(.25,.46,.45,.94) both;  

     border-radius: 9px;
     border: 1px solid #F77A20;

     .Quantity{
          font-family: 'Open Sans', sans-serif;
          font-size: 20px;
          font-weight: 400;
          line-height: 27px;
          letter-spacing: 0em;
          text-align: left;

          color: var(--color-Brand1);
     }
     .Value{
          font-family: 'Open Sans', sans-serif;
          font-size: 18px;
          font-weight: 300;
          line-height: 25px;

          color: var(--color-Grey0);
     }

     @keyframes slide-in-right{0%{transform:translateX(10px);opacity:0}100%{transform:translateX(0);opacity:1}}
`
const BoxButtons = styled.div`
     height: 30px;
     width: 120px;

     justify-content: space-between;
     flex-direction: row;
     align-items: center;
     display: flex;
     gap: 5px;

     position: absolute;
     right: 0; bottom: 0;

     border: 1px solid transparent;
`
export { ContainerCard, CardDefault, BoxCount, Infos, Text, Type, BoxButtons }