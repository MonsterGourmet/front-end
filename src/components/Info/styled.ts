'use client'
import { styled } from "styled-components"

const SInfo = styled.section`
     min-height: 200px;
     width: 100%;

     border: 1px solid red;

     padding: 15px;

     flex-direction: column;
     display: flex;
     gap: 15px;

     color: var(--color-Grey4);

     h1{
          color: var(--color-Grey0); 
     }
` 

const SText = styled.p`
     span{
          color: var(--color-Brand1);

          font-weight: 700;
     }
`

const SContact = styled.div`
     height: 40px;
     width: 165px;

     border-radius: 20px;
     border: 3px solid var(--color-Brand1);

     flex-direction: row;
     justify-content: flex-start;
     display: flex;
     align-items: center;


     position: relative;
`
export {
     SText, SInfo, SContact
}