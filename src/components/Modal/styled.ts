'use client'
import { styled } from "styled-components";

const SWrapper = styled.section`
     height: 100vh;
     width: 100vw;

     position: fixed;
     top: 0; bottom: 0;

     z-index: 5;

     background-color: var(--color-Wrapper);

     justify-content: center;
     flex-direction: column;
     align-items: center;
     display: flex;

`

const SText = styled.p`
     color: var(--color-White);

     span{
          color: var(--color-Brand1);
          font-size: 32px;
          font-weight: 700;
          line-height: 39px;
          letter-spacing: 0em;
          text-align: left;


          font-weight: 400;
     }
`

const SModal = styled.aside`
     height: 500px;
     width: min(325px,90%);

     background-color: var(--color-White);

     border-radius: 20px;
     border: 2.5px solid var(--color-Brand1);

     z-index: 6;
`

const SContainerModal = styled.div`
     height: 100%;
     width: 100%;

     position: relative;

     justify-content: space-evenly;
     flex-direction: column;
     align-items: center;
     display: flex;

     .List{
          height: 85%;
          width: 100%;
          
          padding: 10px 5px;
          
          border: 1px solid red;

          overflow-y: auto;

          justify-content: flex-start;
          flex-direction: column;
          align-items: center;
          display: flex;
          gap: 10px;
     }

`

export { SWrapper, SText, SModal, SContainerModal } 