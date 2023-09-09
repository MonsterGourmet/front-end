import { Inter } from "next/font/google"

import { InfoCard } from "../Categories/CardInfo"

import { loadDataOnCategory } from "../../../database/server"

import { SContainerModal, SModal, SText, SWrapper } from "./styled"

const inter = Inter({ subsets: ['latin'] })

export function Modal() {
     const infos = {
          type: 'Burguer',
          Model: 'Food'
     }

     return (
          <SWrapper>
               <SModal>
                    <SContainerModal>
                         <ContentModal info={infos} />
                    </SContainerModal>
               </SModal>
          </SWrapper>
     )
}

function ContentModal({info}: any) {
     const { type, Model } = info     

     const productsRepository = loadDataOnCategory

     const Default = () => {
          return (
               <ul className="List">
                         <h1>Default</h1>
               </ul>
          )
     }
 
     const Food = (type:any) => {
          const filteredList = productsRepository.filter( session => session.category === type )

          const currentList = filteredList[0].products

          return (
               <>
                    <SText as={'h1'} className={inter.className}><span>{type}</span></SText>
                    <ul className="List">
                         {
                              currentList.map( product => <InfoCard key={product.name} />)

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