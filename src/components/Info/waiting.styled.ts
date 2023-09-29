'use client'

import { styled } from "styled-components"

const Info = styled.section`
     min-height: 200px;
     width: 100%;
` 
const Text = styled.p`
     height: 50px;
     width: 100%;

     display: block;

     border-radius: 20px;
     border: 1px solid transparent;

     span{
          color: var(--color-Brand1);

          font-weight: 700;
     }
      
     background-image: linear-gradient( 90deg, #ccc 0px, rgb(229 229 229 / 90%) 40px, #ccc 80px);

     background-position: 100% 0 ;
     background-size: 300%;

     animation: shimmer 1s infinite;
`
const Contact = styled.div`
     height: 40px;
     width: 165px;

     background-image: linear-gradient( 90deg, #ccc 0px, rgb(229 229 229 / 90%) 40px, #ccc 80px);

     border-radius: 20px;
     border: 1px solid transparent;

     background-position: 100% 0 ;
     background-size: 300%;

     animation: shimmer 1s infinite;
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