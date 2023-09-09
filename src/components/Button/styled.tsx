'use client'

import styled from 'styled-components';

import { ButtonProps } from './types';

export const SButton = styled.button`
  width: 50px;
  height: 50px;
`;

export const SButtonTell = styled.button`
  height: 99%;
  width: 100px;

  border-radius: 0px 20px 20px 0px;
  border: 1px solid transparent;
  
  background-color: var(--color-White);
  color: var(--color-font);

  position: absolute;
  right: 0;

  font-weight: 500;
  font-size: 15px;

  text-align: center;  
`

export const SButtonAdd = styled.button`
  height: 35px;
  width: 40px;

  border-radius: 100%;
  border: 1px solid var(--color-Brand1);

  justify-content: center;
  flex-direction: row;
  align-items: center;
  display: flex;

  .iconPlus{
    background-color: transparent;
    color: var(--color-Brand1);

    font-size: 32px;
  }
  .iconAdded{
    background-color: transparent;
    color: var(--color-Brand1);

    font-size: 32px;
  }

`

export const SButtonOption = styled.button<ButtonProps>`
     height: 40px;
     min-width: 130px;

     transition: 200ms linear;

     border-radius: 20px;
     border: 1px solid var(--color-Brand1);

     box-shadow: 0px 1px 1px 0px var(--color-DropShow);

     background-color: ${(props) => (props.$isSelected !== 'all' ? 'var(--color-Brand1)': 'var(--color-White)')};
     color: var(--color-Brand1);

     justify-content: center;
     align-items: center;
     display: flex;

     cursor: pointer;

     .Icon{          
          height: 40px;
          width: 50px;

          border-radius: 100%;

          color: var(--color-Brand1);

          animation:slide-in-blurred-right 250ms both;

          overflow: hidden;
     }
`