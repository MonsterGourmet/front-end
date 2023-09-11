'use client'

import { Inter } from "next/font/google"

import { InfoCard } from "../Categories/CardInfo"

import { useContext } from "react"

import { ScreenHomeContext } from "@/providers/ScreenHome.Context"

import { loadDataOnCategory } from "../../../database/server"

import { SContainerModal, SModal, SText, SWrapper } from "./styled"
import { ButtonCloseModal } from "../Button"

const inter = Inter({ subsets: ['latin'] })

export function ModalVisibilityControl() {
     const { useModalStore } = useContext(ScreenHomeContext)

     const info = useModalStore((state:any) => state.infoModal)

     const toggleModal = useModalStore((state:any) => state.sttsModal)

     return toggleModal ? Modal(info) : null 
}

function Modal(infos: any) {
     return (
               <SWrapper>
                    <SModal>
                         <ButtonCloseModal ConfigCss={'bttnClose'}  />
                         <SContainerModal>
                              <ContentModal info={infos} />
                         </SContainerModal>
                    </SModal>
               </SWrapper>
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
                    <SText as={'h1'} className={inter.className}><span>{type}</span></SText>
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
               <ul className="List">
                         <h1>Payment</h1>
               </ul>
          )
     }

     const Address = () => {
          return (
               <ul className="List">
                         <h1>Address</h1>
               </ul>
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