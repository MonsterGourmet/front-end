'use client'
import { useState } from "react";
import { InputProps } from "./types";

import * as S from "./styled";

import * as useStore from "@/hooks/useStore"

export const Input = ({ label, variant, register, ...props }: InputProps) => {
  return (
    <S.InputStructure>
      {label && <label htmlFor={label}>{label}</label>}
      <S.StyledInputField  {...props} id={label}  {...register} />
    </S.InputStructure>
  );
};

export const SelectInput = () => {
  const [neighborhood, setneighborhood] = useState('');

  const setterAddress = useStore.Cart((state:any) => state.setterAddress)
  const getterAddress = useStore.Cart((state:any) => state.address)

  const handleneighborhoodChange = (event: any) => {
    setneighborhood(event.target.value); 

    const completeAddress = {
      ...getterAddress,
      bairro: neighborhood
    }

    setterAddress(completeAddress)
  };

  return (
    <S.SelectStructure onChange={handleneighborhoodChange}>
      <optgroup label="Bairros disponivéis">
        <option value="">Escolha seu bairro</option>
        <option value="Star">Star</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Cruzeiro">Cruzeiro</option>
      </optgroup>
    </S.SelectStructure>
  )
}
