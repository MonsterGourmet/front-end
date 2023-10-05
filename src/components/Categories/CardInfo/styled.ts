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
     gap: 5px;
`
const Figure = styled.figure`
     height: 110px;
     width: 35%;

     border-radius: 10px;
     border: 1px solid rgba(247, 122, 32, 1);

     position: relative;

     img {
          object-fit: cover;

          border-radius: 10px;
          border: 1px solid transparent;
     }
`
const BoxInfo = styled.div`
     height: 100%;
     width: 65%;

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

     /* :where(hr){
          height: 0.5px;

          background-color: rgba(247, 122, 32, 1);
          border: 0.5px solid transparent;
     } */

`
const Text = styled.p`
     /* font-size: 20px;
     font-weight: 400;
     line-height: 27px; */

     /* color: var(--color-Brand1); */



     span{
          color: var(--color-Grey0);

          /* font-size: 32px;
          font-weight: 700;
          line-height: 39px; */

          border-bottom: 0.5px solid rgba(247, 122, 32, 1);
     }
`

export { Text, Cardinfo, Figure, BoxInfo } 