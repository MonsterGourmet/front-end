'use client'
import { styled } from "styled-components";

const Product = styled.li`
     min-width: 166px;
     height: 280px;

     border-radius: 20px;
     border: 1px solid transparent;

     background-image: linear-gradient( 90deg, #ccc 0px, rgb(229 229 229 / 90%) 40px, #ccc 80px);

     background-position: 100% 0 ;
     background-size: 300%;

     animation: shimmer 1s infinite;
`
export { Product }