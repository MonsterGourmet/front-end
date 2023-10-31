'use client'

import styled from 'styled-components';

const Header = styled.header`
  height: 130px;
  width: var(--container-Width);

  padding: 15px 15px 5px 20px;
  
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  display: flex;

  transition: 200ms linear;

  @media screen and ( min-width: 700px ) {
    padding: 15px 200px 5px 200px;
  }
`
export { Header }