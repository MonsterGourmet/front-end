'use client'
import * as S from './styled'

import * as useStore from '@/hooks/useStore'

import { Inter } from "next/font/google"

import { Input } from '../Form/Input'

import { InfoCard } from "../Categories/CardInfo"

import { FormAddress } from '../Form'

import { loadDataOnCategory } from "../../../database/server"

import { Button, ButtonCloseModal, PaymentButtons } from "../Button"

const inter = Inter({ subsets: ['latin'] })

export function ModalVisibilityControl(): JSX.Element | null {
     const info = useStore.Modal((state:any) => state.infoModal)
     const toggleModal = useStore.Modal((state:any) => state.sttsModal)

     return toggleModal ? Modal(info) : null 
}

function Modal(infos: any) {
     return (
               <S.Wrapper>
                    <S.Modal>
                         <ButtonCloseModal configCss={'bttnClose'}  />
                         <S.ContainerModal>
                              <ContentModal info={infos} />
                         </S.ContainerModal>
                    </S.Modal>
               </S.Wrapper>
     )
}

function ContentModal({info}: any) {
     const { type, Model } = info     
     
     const setChange = useStore.Cart(state => state.setterChange)


     const MethodsPayment = (type: string): JSX.Element => {
          switch (type) {
               case 'Dinheiro':
                    return (
                    <Input label="Tem troco ?" placeholder="Ex: 50,00" 
                    type="number"  min="0.00" max="10000.00" 
                    step="0.01" onChange={(event)=>{setChange(event.target.value)}}/> 
                    )
               case 'Cartão':
                    return(
                         <dl>
                              <dt>Crédito ou Débito</dt>
                              <dd>Aceitamos cartão de crédito ou débito, o pagamento é efetuado no ato da entrega.</dd>
                         </dl>
                    )
               case 'Pix':
                    return <h2>Chave Pix: XXXXXXXXX</h2>
               default:
                    return <h1 className='Choice'>Escolha seu método de pagamento</h1>
          }
     }

     const Default = (): JSX.Element => {
          return (
               <ul className="List">
                    <h1>Default</h1>
               </ul>
          )
     }
 
     const Food = (type:any): JSX.Element => {

          const productsRepository = loadDataOnCategory

          const filteredList = productsRepository.filter( session => session.category === type )

          const currentList = filteredList[0].products

          return (
               <>
                    <S.Text as={'h1'} className={inter.className}><span>{type}</span></S.Text>
                    <ul className="List">
                         {
                              currentList.map( product => <InfoCard key={product.name} Product={product}/>)
                         }
                    </ul>
               </>
          )
     }

     const Payment = (): JSX.Element => {

          const getPay = useStore.Cart(state => state.payment)
          const setPay = useStore.Cart(state => state.setterPayment)

          const sttsModal = useStore.Modal(state => state.alteredSttsModal)
      
          const handleClick = () => {
               sttsModal(false)
          }

          return (
               <S.BoxPayment>
               <S.Text>Pagamento</S.Text>
                    <PaymentButtons text='Dinheiro' onClick={()=>{setPay('Dinheiro')}}/>
                    <PaymentButtons text='Cartão' onClick={()=>{setPay('Cartão')}}/>
                    <PaymentButtons text='Pix'  onClick={()=>{setPay('Pix')}} /> 
                    <S.BoxComplement>
                         { MethodsPayment(getPay) }
                    </S.BoxComplement>
                    <Button onClick={handleClick} configCss='configBttn' text='Confirmar' />
               </S.BoxPayment>
          )
     }

     const Address = () => {
          return (
            <S.BoxAddress>
               <FormAddress />
            </S.BoxAddress>
          )
     }

     switch (Model) {
          case 'Food':
               return Food(type)
          case 'Payment':
               return Payment()
          case 'Address':
               return Address()
          default:
               return Default()
     }
}