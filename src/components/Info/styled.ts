'use client'
import { styled } from "styled-components"

const SContainerInfo = styled.section`
     min-height: 200px;
     width: 100%;

     padding:  15px;
     margin:   10px 0 20px 0;

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

     justify-content: flex-start;
     flex-direction: row;
     align-items: center;
     display: flex;

     position: relative;
`
export {
     SText, SContainerInfo, SContact
}