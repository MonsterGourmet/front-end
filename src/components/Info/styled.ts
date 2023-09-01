'use client'
import { styled } from "styled-components"

const SInfo = styled.section`
     height: 200px;
     width: 100%;

     border: 1px solid red;

     padding: 15px;

     flex-direction: column;
     display: flex;
     gap: 10px;
` 

const SText = styled.p`
     color: var(--color-Grey0);
   
     span{
          color: var(--color-Brand1);

          font-weight: 700;
     }

`

export {
     SText, SInfo
}