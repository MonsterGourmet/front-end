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

  return (
    <S.SelectStructure {...register} >
      <optgroup label="Bairros disponivéis">
        <option value="-0">Escolha seu bairro</option>
        <option value="Star-12">Star</option>
        <option value="Los Angeles-3">Los Angeles</option>
        <option value="Cruzeiro-5">Cruzeiro</option>
      </optgroup>
    </S.SelectStructure>
  )
}
