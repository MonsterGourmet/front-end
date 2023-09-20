'use client'

import styled from "styled-components";

const Text = styled.p`
     color: var(--color-Brand1);

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
     height: 500px;
     width: 100%;
`
const Container = styled.div`
     height: 100%;
     width: 100%;

     padding: 20px 15px;
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