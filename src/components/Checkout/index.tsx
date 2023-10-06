import * as S from './styled'
import * as useStore from '@/hooks/useStore'

import Link from 'next/link'

import { Button, CheckoutButtons } from '../Button'

export function Checkout() {
     const cart = useStore.Cart(state => state.cart)
     const setObs = useStore.Cart(state => state.setterObservation)
     const closeCart = useStore.Cart(state => state.closeCart)


     const sttsModal = useStore.Modal(state => state.alteredSttsModal)
     const alterInfoModal = useStore.Modal(state => state.alteredInfoModal)
     
     const getValueSub = cart.reduce((acc: any, num:any) => acc + num.value,0)
     const getValueDelivery = useStore.Cart(state => state.valueDelivery)
     const getValueTotal =  Number(getValueSub) + Number(getValueDelivery)


     const handleClick = () => {
          sttsModal(true)

          const infoModal = {
               Model: 'Payment',
          }
   
          alterInfoModal(infoModal);
     }

     const openModal = () => {
          sttsModal(true)

          const infoModal = {
               Model: 'Address',
            }
   
          alterInfoModal(infoModal);
     }

     const getObs = (data: string) => {
          setObs(data)
     }

     return (
          <S.Checkout>
               <S.SubTotal>
                    <S.Text>
                         Subtotal:
                    </S.Text>
                    <S.Text>{Number(getValueSub).toLocaleString('pt-br',{
                         style: 'currency',
                         currency: 'BRL'})}     
                    </S.Text>
               </S.SubTotal>
               <S.IncrementTotal>
                         <S.Text>
                              Entrega : + 
                         </S.Text>
                         <S.Text> 
                         {Number(getValueDelivery).toLocaleString('pt-br',{
                         style: 'currency',
                         currency: 'BRL'})}      
                         </S.Text>
               </S.IncrementTotal>
               <S.Total>
                    <S.Text>
                         Total:
                    </S.Text>
                    <S.Text>{getValueTotal.toLocaleString('pt-br',{
                         style: 'currency',
                         currency: 'BRL'})}     
                    </S.Text>
               </S.Total>
               <S.Payment>
                    <S.Text>
                         Pagamento
                    </S.Text>
                    <CheckoutButtons text={'Meio de pagamento'} onClick={handleClick} />
               </S.Payment>
               <S.Address>
                    <S.Text>
                         Endereço
                    </S.Text>
                    <CheckoutButtons text={'Adicione seu endereço'} onClick={openModal} />
               </S.Address>
               <S.SpaceForNotes>
                    <S.Text>
                         Observação
                    </S.Text>
                    <textarea onChange={(event: React.ChangeEvent<HTMLTextAreaElement>)=>getObs(event.target.value)}  placeholder="Digite aqui sua observações">
                    </textarea>
               </S.SpaceForNotes>
               <S.SpaceForButtons>
                         <Link href='/'>
                              <Button configCss='configBttn' text='Voltar' />
                         </Link>
                         <Button configCss='configBttn' text='Fechar comprar' onClick={closeCart} />
               </S.SpaceForButtons>
          </S.Checkout>
     )
}