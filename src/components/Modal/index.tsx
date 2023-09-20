'use client'
import * as S from './styled'

import * as useStore from '@/hooks/useStore'

import { Inter } from "next/font/google"

import { InfoCard } from "../Categories/CardInfo"

import { useContext } from "react"

import { ScreenHomeContext } from "@/providers/ScreenHome.Context"

import { loadDataOnCategory } from "../../../database/server"

import { ButtonCloseModal, PaymentButtons } from "../Button"
import { FormAddress } from '../Form'

const inter = Inter({ subsets: ['latin'] })

export function ModalVisibilityControl() {
     const info = useStore.Modal((state:any) => state.infoModal)
     const toggleModal = useStore.Modal((state:any) => state.sttsModal)

     return toggleModal ? Modal(info) : null 
}

function Modal(infos: any) {
     return (
               <S.Wrapper>
                    <S.Modal>
                         <ButtonCloseModal ConfigCss={'bttnClose'}  />
                         <S.ContainerModal>
                              <ContentModal info={infos} />
                         </S.ContainerModal>
                    </S.Modal>
               </S.Wrapper>
     )
}

function ContentModal({info}: any) {
     const { type, Model } = info     

     const Default = () => {
          return (
               <ul className="List">
                         <h1>Default</h1>
               </ul>
          )
     }
 
     const Food = (type:any) => {

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

     const Payment = () => {
          return (
               <S.BoxPayment>
                    <S.Text>Pagamento</S.Text>
                    <PaymentButtons />
               </S.BoxPayment>
          )
     }

     const Address = () => {
          return (
            <S.BoxPayment>
               <FormAddress />
            </S.BoxPayment>
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