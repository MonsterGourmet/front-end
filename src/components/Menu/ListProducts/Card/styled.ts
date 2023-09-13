'use client'

import { styled } from "styled-components";

interface CardProps {
     readonly $isCard: boolean;
     readonly $Delay?: any;
}

const Text = styled.p<CardProps>`
     font-size: 12;
     font-weight: 300;

     color: var(--color-Grey0);

     h2{
          font-weight: 300;
     }

     span{
          color: ${(props) => (props.$isCard ? 'var(--color-Brand1)' : 'var(--color-White)')};

          font-size: 20px;
          font-weight: 600;
          line-height: 24px;
     }    
`
const Type = styled.div<CardProps>`
     height: 31px;
     width: 141px;

     border-radius: 10px;
     border: 1px solid transparent;

     position: absolute;
     right: 10px; bottom: 10px;

     background-color: ${(props) => (props.$isCard ? 'var(--color-Brand1-75)' : 'var(--color-White)')};

     justify-content: center;
     flex-direction: column;
     align-items: center;
     display: flex;

     animation:slide-in-right 300ms cubic-bezier(.25,.46,.45,.94) both;  

     ${Text}{
          font-size: 12;
          font-weight: 300;

          color: ${(props) => (props.$isCard ? 'var(--color-White)' : 'var(--color-Brand1)')};
     }

     @keyframes slide-in-right{0%{transform:translateX(10px);opacity:0}100%{transform:translateX(0);opacity:1}}
`
const Infos = styled.div`
     height: 93px;
     width: 157px;

     border-radius: 10px;
     border: 2px solid transparent;

     padding: 5px;

     justify-content: flex-start;
     flex-direction: column;
     align-items: flex-start;
     display: flex;
     gap: 5px;   
`
const CardDefault = styled.li<CardProps>`
     min-height: 160px;
     width: 100%;
     
     transition: 200ms ease-in;
     
     border-radius: 20px;
     border: ${(props) => (props.$isCard ? '2px solid var(--color-Brand1)' : '2px solid var(--color-White)')};

     background-color: ${(props) => (props.$isCard ? 'var(--color-White)' : 'var(--color-Brand1)')};
     box-shadow: ${(props) => (props.$isCard ? '0px 0px 7px 1px  #ce5e0da3' : '0px 5px 5px 0px var(--color-DropShow)')};

     padding: 10px 0px 5px 10px;

     position: relative;

     animation:  ${(props) => (props.$Delay)};
   
     @keyframes swing-in-left-fwd{
          0%{
               transform:translateX(-500px) 
               rotateY(30deg) scale(0);
               transform-origin:-100% 50%;
               opacity:0
          }100%{
               transform:translateX(0) rotateY(0) scale(1);
               transform-origin:1800px 50%;opacity:1
          }
     }
`
const ContainerCard = styled.div<CardProps>`
     min-height: 150px;
     width: 100%;

     flex-direction: row;
     align-items: flex-start;
     display: flex;
     gap: 5px;

     position: relative;


     .Photo{
          transition: 250ms ease-out;

          width: 102px;
          height: 93px;
          
          border-radius: ${(props) => (props.$isCard ? '10px' : '100%')};
          border: 2px solid transparent;

          background-color: ${(props) => (props.$isCard ? ' var(--color-Brand1-75) ' : 'var(--color-White)')};
     } 
     .configBttnCls{
          position: absolute;
          right: 10px;
     }   
`

export { ContainerCard, CardDefault, Infos, Text, Type }