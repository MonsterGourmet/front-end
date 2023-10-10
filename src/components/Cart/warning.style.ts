'use client'

import styled from "styled-components";

const Text = styled.p`
     color: var(--color-Brand1);

     display: block;

     height: 50px;
     width: 100%;

     border-radius: 20px;
     border: 1px solid transparent;
     
     background-image: linear-gradient( 90deg, #ccc 0px, rgb(229 229 229 / 90%) 40px, #ccc 80px);

     background-position: 100% 0 ;
     background-size: 300%;

     animation: shimmer 1s infinite;

     @keyframes shimmer {
     to { background-position: -100% 0; }
     }

     font-family: 'Inter', sans-serif;
     font-size: 24px;
     font-weight: 200;
     line-height: 20px;

     span{
          color: var(--color-Brand1);

          font-weight: 700;
     }
`
const Cart = styled.section`
     height: 320px;
     width: 100%;
`
const Container = styled.div`
     height: 100%;
     width: 100%;

     padding: 20px 15px;
     
     /* background-image: linear-gradient( 90deg, #ccc 0px, rgb(229 229 229 / 90%) 40px, #ccc 80px);

     background-position: 100% 0 ;
     background-size: 300%;

     animation: shimmer 1s infinite;

     @keyframes shimmer {
     to { background-position: -100% 0; }
     } */
`
const ListCard = styled.ul`
     height: 100%;
     width: 100%;

     margin: 10px 0;
     padding: 10px 5px;

     overflow-y: auto;
     overflow-x: hidden;

     justify-content: flex-start;
     flex-direction: column;
     align-items: center;
     display: flex;
     gap: 15px;
`
export { Text, Cart, Container, ListCard }