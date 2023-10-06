'use client'

import styled from 'styled-components';

import { ButtonProps } from './types';

interface BttnCount {
  type?: "+" | "-";
}


const Text = styled.p`
     color: var(--color-Brand1);

     font-family: 'Inter', sans-serif;
     font-size: 1.25rem;
     font-weight: 400;
     line-height: 29px;

     color: var(--color-Brand1);

     span{
          color: var(--color-Brand1);

          font-weight: 700;
     }
`
const Button = styled.button`
  width: 160px;
  height: 40px;

  border-radius: 20px;
  border: 1px solid white;

  background-color: var(--color-Brand1);
  color: var(--color-White);
  
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 29px;
`
const ButtonTell = styled.div`
  height: 99%;
  width: 100px;

  justify-content: center;
  flex-direction: row;
  align-items: center;
  display: flex;

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
const ButtonAdd = styled.button`
  height: 35px;
  width: 40px;

  border-radius: 100%;
  border: 1px solid transparent;

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
const BttnCount = styled.button<BttnCount>`
  height: 100%;
  width: 54px;

  font-size: 25px;
  font-weight: 100;

  text-align: center;

  border-radius: 9px;
  border: 1px solid var(--color-Brand1);

  color: var(--color-Brand1-75);
  background-color: var(--color-White);

  &:active{
    background-color: ${(props) => (props.type === '+' ? 'var(--color-Brand1-75)': 'var(--color-Brand1-80)')};
    color: var(--color-White);

  }
`
const ButtonClose = styled.button`
  height: 30px;
  width: 30px;

  border-radius: 100%;
  border: 1px solid var(--color-White);
  
  background-color: var(--color-Brand1);
  color: var(--color-White); 

  justify-content: center;
  flex-direction: row;
  align-items: center;  
  display: flex;

  .iconClose{
    border-radius: 100%;
    border: 1px solid transparent;

    color: var(--color-White);

    font-size: 31px;
  }
`
const ButtonRemove = styled.button`
  height: 30px;
  width: 54px;

  border-radius: 9px;
  border: 1px solid var(--color-Alert1);
  
  background-color: var(--color-White);
  color: var(--color-White); 

  justify-content: center;
  flex-direction: row;
  align-items: center;  
  display: flex;

  .iconTrash{
    color: var(--color-Alert1);

    font-size: 21px;
  }
`
const ButtonOption = styled.button<ButtonProps>`
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
const ButtonPayment = styled.button`
  height: 99%;
  width: 240px;

  background-color: var(--color-White);
  color: var(--color-Bran1);
  
  border-radius: 50px;
  border: 2px solid var(--color-Brand1);

  ${Text}{
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 600;  
  }
`
const OptionsPaymentBttn = styled.button`
  height: 60px;
  min-width: 115px;

  background-color: var(--color-Brand1);
  color: var(--color-White);


  outline: 3px var(--color-Brand1-75) solid;
  outline-offset: -3px;

  border-radius: 20px;
  border: none;
  
  transition: 400ms;

  font-weight: 400;
  font-size: 1em;

  transition: 400ms;

  &:hover {
    background-color: transparent;
    color: var(--color-Brand1);
  }
`

export { 
  Text, Button, ButtonTell, BttnCount, ButtonAdd, 
  ButtonPayment, ButtonClose, ButtonOption, ButtonRemove,
  OptionsPaymentBttn 
}