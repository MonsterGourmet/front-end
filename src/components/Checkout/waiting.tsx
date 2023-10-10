import * as S from './waiting.style'
import * as useStore from '@/hooks/useStore'

import Link from 'next/link'

import { Button, CheckoutButtons } from '../Button'

export function AwaitCheckout() {
    
     return (
          <S.Checkout>
               <S.SubTotal>
                    <S.Text>
                    </S.Text>
                    <S.Text>   
                    </S.Text>
               </S.SubTotal>
               <S.IncrementTotal>
                         <S.Text>
                         </S.Text>
                         <S.Text>    
                         </S.Text>
               </S.IncrementTotal>
               <S.Total>
                    <S.Text>
                    </S.Text>
                    <S.Text>   
                    </S.Text>
               </S.Total>
               <S.Payment>
                    <S.Text>
                    </S.Text>
               </S.Payment>
               <S.Address>
                    <S.Text>
                    </S.Text>
               </S.Address>
               <S.SpaceForNotes>
                    <S.Text>
                    </S.Text>
                    <textarea >
                    </textarea>
               </S.SpaceForNotes>
               <S.SpaceForButtons>

               </S.SpaceForButtons>
          </S.Checkout>
     )
}