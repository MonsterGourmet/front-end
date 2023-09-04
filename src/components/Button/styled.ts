'use client'
import styled from 'styled-components';

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

export const SButtonCategory = styled.button `
  height: 40px;
  min-width: 100px;

  background-color: var(--color-White);
  color: var(--color-Brand1);

  border-radius: 20px;
  border: 1px solid var(--color-Brand1);

  transition: 200ms linear;

  font-weight: 700;

  &:hover{
    background-color: var(--color-Brand1);
    color: var(--color-White);

    box-shadow: 0px 2px 2px 0px var(--color-DropShow);
  } 
`