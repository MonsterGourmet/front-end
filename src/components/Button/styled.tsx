'use client'
import styled from 'styled-components';

export const SButton = styled.button`
  width: 50px;
  height: 50px;

  /* color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main}; */

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