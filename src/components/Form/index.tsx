import { Button, CheckoutButtons } from "../Button"

import { useForm } from 'react-hook-form'

import { Input, SelectInput } from "./Input"

import * as S from "./styled"
import * as useStore from "@/hooks/useStore"

export function FormAddress() {
     const { register, handleSubmit } = useForm();

     const setterAddress = useStore.Cart((state:any) => state.setterAddress)

     //Veja se não é melhor o ZOD
     const infoAddress = async (data: any) => {
          setterAddress(data)
     };

     return (
          <S.Form onSubmit={handleSubmit(infoAddress)}>
               <Input label="Rua" placeholder="Ex: Rua XXXXX" type="text" register={register('street')}/>
               <Input label="Numero de endereço"  type="number" placeholder="Ex: N XX" register={register('numberHouse')}/>
               <Input label="Complemento" placeholder="Ex: Casa" register={register('complement')}/>
               <Input label="Ponto de referencia" placeholder="Ex: Ao lado da Barbearia" register={register('pointReference')}/>      
               <SelectInput />
               <Button text='Confirmar' />
          </S.Form>
     )
}