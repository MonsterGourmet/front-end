'use client'

import { styled } from "styled-components";

const Wrapper = styled.section`
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
const Text = styled.p`
     color: var(--color-White);

     span{
          color: var(--color-Brand1);
          
          font-size: 22.5px;
          font-weight: 700;
          line-height: 39px;
          font-weight: 700;
     }
`
const Modal = styled.aside`
     height: 500px;
     width: min(325px,90%);

     background-color: var(--color-White);

     border-radius: 20px;
     border: 2.5px solid var(--color-Brand1);

     position: relative;

     z-index: 6;

     .bttnClose{
          position: absolute;
          right: 10px; top: 10px; 

          z-index: 7;
     }

     animation: slideElliptc 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

@keyframes slideElliptc {
     0% {
          transform: translateY(600px) rotateX(30deg) scale(0);
          transform-origin: 50% 100%;
          opacity: 0;
     }
     100% {
          transform: translateY(0) rotateX(0) scale(1);
          transform-origin: 50% -1400px;
          opacity: 1;
     }}
`
const ContainerModal = styled.div`
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
          
          overflow-y: auto;

          justify-content: flex-start;
          flex-direction: column;
          align-items: center;
          display: flex;
          gap: 10px;
     }

`
const BoxPayment = styled.div`
    height: 80%;
    width: 100%;

    margin-top: 35px;
    padding: 10px;

    border: 1px solid red;

    position: relative;

    flex-direction: row;
    align-items: center;
    display: flex;
    gap: 10px;

    flex-wrap: wrap;
    align-content: flex-start;

     ${Text} {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 29px;

          color: var(--color-Brand1);

          position: absolute;
          top: -55px; left: 10px;
     }

     .configBttn{
          margin: 70px auto 0px auto;
     }
`
const BoxAddress = styled.div`
        height: 100%;
     width: 100%;

     padding: 10px;

     position: relative;

     flex-direction: column;
     align-items: flex-end;
     display: flex;

     ${Text} {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 29px;

          color: var(--color-Brand1);

          position: absolute;
          top: 10px;
     }
`
const BoxComplement = styled.div`
     height: 100px;
     width: 100%;

     margin-top: 10px;

     h2{
          font-size: 1.5rem;
          font-weight: 300;
          line-height: 29px;

          color: var(--color-Brand1);

          position: absolute;

          animation:text-focus-in 800ms cubic-bezier(.55,.085,.68,.53)
     }

     .Choice{
          color: var(--color-Brand1-80);

          animation:text-focus-in 800ms cubic-bezier(.55,.085,.68,.53)
     }

     dt{
          font-size: 1.4rem;
          font-weight: 300;
          line-height: 29px;

          animation:text-focus-in 800ms cubic-bezier(.55,.085,.68,.53);

          color: var(--color-Brand1-80);
     }

     dd{
          padding-left: 5px;

          font-size: 1rem;
          font-weight: 300;
          line-height: 29px;

          color: var(--color-Brand1-80);

          animation:text-focus-in 800ms cubic-bezier(.55,.085,.68,.53)
     }

     @keyframes text-focus-in{0%{filter:blur(12px);opacity:0}100%{filter:blur(0);opacity:1}}
`

export { Wrapper, Text, Modal, ContainerModal, BoxPayment, BoxAddress, BoxComplement } 