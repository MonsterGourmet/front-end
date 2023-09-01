'use client'
import { styled } from "styled-components";

import swapThemes from "./utils";
import { Il, iButton } from "./types";

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
const SBall = styled.div`
     height: 30px;
     width: 30px;

     background-color: var(--color-Brand1);
     color: var(--color-White);

     border-radius: 100%;
     border: 1px solid transparent;

     right: -10px; top: -10px;
     position: absolute;
     z-index: 2;

     justify-content: center;
     align-items: center;
     display: flex;
`
const SIconCart = styled.button<iButton>`
     height: 55px;
     width: 55px;

     transition: 200ms linear;

     background-color: ${(props) => swapThemes(props.status).backgroundColor};

     box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );

     border-radius: 10px;
     border: 1px solid rgba( 255, 255, 255, 0.18 );
     
     position: relative;

     margin-top: 20px;

     justify-content: center;
     align-items: center;
     display: flex;

     :first-child{
          width: 50%;
          height: 50%;

          background-color: transparent;
          color:  ${(props) => swapThemes(props.status).color};

          position: absolute;
          z-index: 1;
     }

     &:hover  :first-child{
          color: var(--color-White);
     }

     &:hover{
          background:  ${(props) => swapThemes(props.status).hover};

     }

     &:hover ${SBall}{
          border: var(--color-White) 1px solid;
          background: var(--color-White);

          color: var(--color-Brand1);
     } 
`

export {
     SFigure, SIconCart, SBall
}