'use client'

import { styled } from "styled-components"

const Info = styled.section`
     min-height: 200px;
     width: 100%;
` 
const Text = styled.p`
     span{
          color: var(--color-Brand1);

          font-weight: 700;
     }
`
const Contact = styled.div`
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
const ContainerInformation = styled.div`
     height: 100%;
     width: var(--container-Width);
     
     padding:  15px;
     margin:   10px 0 20px 0;

     flex-direction: column;
     display: flex;
     gap: 15px;

     color: var(--color-Grey4);

     :where(h1){
          color: var(--color-Grey0); 
     }
`
export {
     Text, Info, Contact, ContainerInformation
}