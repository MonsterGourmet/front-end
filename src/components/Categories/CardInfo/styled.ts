'use client'

import styled from "styled-components";

const Cardinfo = styled.li`
     min-height: auto;
     width: 100%;

     padding: 10px;

     border-radius: 20px;
     border: 1px solid rgba(247, 122, 32, 1); //TODOS: change var

     justify-content: center;
     flex-direction: row;
     align-items: flex-start;
     display: flex;
     gap: 10px;
`
const Figure = styled.figure`
     height: 75px;
     width: 25%;

     border-radius: 10px;
     border: 1px solid yellow;
`
const BoxInfo = styled.div`
     height: 100%;
     width: 70%;

     border-radius: 10px;
     border: 1px solid transparent; //TODOS: change var

     padding-left: 5px;

     :where(p){
          color: #989898;

          padding-left: 5px;

          font-size: 15px;
          font-weight: 400;
          line-height: 30px;
     }
`
const Text = styled.p`
     /* font-size: 20px;
     font-weight: 400;
     line-height: 27px; */

     span{
          color: var(--color-Brand1);

          font-size: 32px;
          font-weight: 700;
          line-height: 39px;
     }
`

export { Text, Cardinfo, Figure, BoxInfo } 