'use client'

import * as S from "./styled";

import * as useStore from "@/hooks/useStore"

import { useState } from "react";
import { InputProps } from "./types";

export const Input = ({ label, variant, register, ...props }: InputProps) => {
  return (
    <S.InputStructure>
      {label && <label htmlFor={label}>{label}</label>}
      <S.StyledInputField  {...props} id={label}  {...register} />
    </S.InputStructure>
  );
};

export const SelectInput = ({register, ...props}: InputProps) => {
  const [neighborhood, setneighborhood] = useState('');

  const setterAddress = useStore.Cart(state => state.setterAddress)
  const getterAddress = useStore.Cart(state => state.address)

  const handleneighborhoodChange = (event: any) => {
    setneighborhood(event.target.value); 
    const bar = event.target.value
    
    const completeAddress = {
      ...getterAddress,
      bairro : bar,

    }
    // console.log(completeAddress)
    
    setterAddress(completeAddress)
  };

  return (
    <S.SelectStructure {...register} onChange={handleneighborhoodChange}>
      <optgroup label="Bairros disponivéis">
        <option value="">Escolha seu bairro</option>
        <option value="Star-12">Star</option>
        <option value="Los Angeles-3">Los Angeles</option>
        <option value="Cruzeiro-5">Cruzeiro</option>
      </optgroup>
    </S.SelectStructure>
  )
}
