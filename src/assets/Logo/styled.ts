'use client'

import { Il } from "../Types/types"

import { styled } from "styled-components"

const SText = styled.p`
     span{
          color: var(--color-Brand1);

          font-weight: 700;
     }
`

const SFigure = styled.figure<Il>`
     height: 105px;
     width: 105px;
    
     border-radius: 100%;
     border: 2.5px solid transparent;

     overflow: hidden;

     animation: ${(props) => props.status} 2s ease-in-out infinite;

     img{ height: 100%; width: 100%}

     @keyframes On {
            0% {
               box-shadow: 0px 0px 16px 2px  var(--color-white);
               border: 2.5px solid transparent;
            }
  
            50% {
               box-shadow: 0px 0px 16px 2px  var(--color-Brand1);
               border: 2.5px solid var(--color-Brand1);
            }

            100% {
               box-shadow: 0px 0px 16px 2px  var(--color-white);
               border: 2.5px solid transparent;
            }
     }

     @keyframes Off {
            0% {
               box-shadow: 1px 0px 32px 0 var(--color-white);
               border: 2.5px solid transparent;
            }
  
            50% {
               box-shadow: 1px 0px 32px 2.5px var(--color-Alert1);
               border: 2.5px solid var(--color-Alert1);
            }

            100% {
               box-shadow:1px 0px 32px 0 var(--color-white);
               border: 2.5px solid transparent;
            }
     }
`

const SContainer = styled.div`   
   height: 25px;
   width: auto;

   padding: 0 10px;

   flex-direction: row;
   align-items: center;
   display: flex;
   gap: 10px;

   ${SText}{
      color: var(--color-White);

      font-size: 0.93rem;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
  
      a{
         font-size: 15px;
         font-weight: 700;
         line-height: 20px;
         letter-spacing: 0em;

         text-decoration: none;

         color: var(--color-White);
      }
   }

 `
const SContainerLT = styled.div`
   height: 100px;
   width: 200px;
   
   flex-direction: column;
   align-items: center;
   display: flex;

   :nth-child(1){
      font-size: 1.5rem;
      line-height: 29px;
      letter-spacing: 0em;

      color: rgba(255, 255, 255, 1);
   };

   :nth-child(2){
      font-size: 2rem;
      line-height: 39px;
      letter-spacing: 0em;

      color: rgba(247, 122, 32, 1);
   };

   :nth-child(3){
      font-size: 1rem;
      line-height: 19px;
      letter-spacing: 0em;

      color: rgba(152, 152, 152, 1);
   }
`

export { SText, SFigure, SContainer, SContainerLT }