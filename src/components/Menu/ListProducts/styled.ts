'use client'

import { styled } from "styled-components";

const SList = styled.ul`
     height: 550px;
     width: 100%;

     border: 2px solid transparent;

     padding: 12px 3px;

     transition: 200ms ease-in;

     /* justify-content: flex-start; */
     flex-direction: column;
     align-items: center;
     display: flex;
     gap: 25px;

     overflow-y: auto;

`

export { SList }
