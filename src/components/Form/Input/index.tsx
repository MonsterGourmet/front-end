'use client'

import * as useStore from '@/hooks/useStore'
import * as S from "./styled";

import { InputProps } from "./types";
import { useState } from "react";

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
    
    setterAddress(completeAddress)
  };
  return (
    <S.SelectStructure {...register} onChange={handleneighborhoodChange} >
      <optgroup label="Bairros disponivéis">
        <option value="">Escolha seu bairro</option>
        <option value="Retirada-0">Retirada no local</option>
        <option value="Centro-5">Centro</option>
        <option value="Central-8">Central</option>
        <option value="Cruzeiro-5">Cruzeiro</option>
        <option value="Caboclo-6">Caboclo</option>
        <option value="Star-12">Star</option>
      </optgroup>
    </S.SelectStructure>
  )
}
