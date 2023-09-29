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

`
const Figure = styled.div`
  height: 105px;
  width: 105px;

  border-radius: 100%;
  border: 2.5px solid transparent;

  background-image: linear-gradient( 90deg, #ccc 0px, rgb(229 229 229 / 90%) 40px, #ccc 80px);

  background-position: 100% 0 ;
  background-size: 300%;

  animation: shimmer 1s infinite;

  @keyframes shimmer {
    to { background-position: -100% 0; }
  }
`

const IconCart = styled.div`
  height: 55px;
  width: 55px;

  background-image: linear-gradient( 90deg, #ccc 0px, rgb(229 229 229 / 90%) 40px, #ccc 80px);

  background-position: 100% 0 ;
  background-size: 300%;

  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  animation: shimmer 1s infinite;

  margin-top: 20px;

`

const CardWait = styled.div`
    height: 130px;
    width: 100px;

    background-image: linear-gradient( 90deg, #ccc 0px, rgb(229 229 229 / 90%) 40px, #ccc 80px);

    background-position: 100% 0 ;
    background-size: 300%;
    
    animation: shimmer 1s infinite;

    @keyframes shimmer {
      to { background-position: -100% 0; }
    }
`
export { Header, CardWait, Figure, IconCart }
