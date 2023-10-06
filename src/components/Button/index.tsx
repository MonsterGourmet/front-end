import * as S from "./styled"
import * as I from "./types"
import * as useStore from '@/hooks/useStore'

import { IButton } from "@/types"

import { AiOutlinePlus, AiFillCloseCircle } from 'react-icons/ai'

import { BsFillCartCheckFill, BsTrash3 } from 'react-icons/bs'

export function Button({configCss, onClick, text}: IButton) {
    return (
          <S.Button className={configCss} onClick={onClick}>{text}</S.Button>
    )
}
export function ButtonAdd({configCss, onClick, status}: IButton) {
    return (
        <S.ButtonAdd onClick={onClick} className={configCss}>
            {
                status ? <AiOutlinePlus className="iconPlus"/> : <BsFillCartCheckFill className="iconAdded" />
            }
        </S.ButtonAdd>
    )
}
export function ButtonContact({text}:I.ButtonContact) {
    return (
        <S.ButtonTell>
            {text}
        </S.ButtonTell>
    )
}
export function ButtonCounter({symbols, onClick}:IButton){
    return (
        <S.BttnCount onClick={onClick} type={symbols}>
            {symbols}
        </S.BttnCount>
    )
}
export function ButtonCloseModal({configCss}:IButton) {
    const sttsModal = useStore.Modal((state:any) => state.alteredSttsModal)
    const alterInfoModal = useStore.Modal((state:any) => state.alteredInfoModal)

    const handleClick = () => {
        sttsModal(false)
        
        const infoModal = {
            type: '',
            Model: '',
        }

        alterInfoModal(infoModal);
    }

    return (
        <S.ButtonClose className={configCss} onClick={handleClick}>
            <AiFillCloseCircle className="iconClose"/>
        </S.ButtonClose>
    )
}
export function ButtonRemoveCart({configCss, onClick}:IButton) {
    return (
        <S.ButtonRemove className={configCss} onClick={onClick}>
            <BsTrash3 className="iconTrash"/>
        </S.ButtonRemove>
    )
}
export function CheckoutButtons({text, onClick}: IButton) {
    return ( 
        <S.ButtonPayment onClick={onClick}>
            <S.Text>{text}</S.Text>
        </S.ButtonPayment>
    )
}
export function PaymentButtons({text, onClick}: IButton) {
    return (
        <S.OptionsPaymentBttn onClick={onClick}>
            {text}
        </S.OptionsPaymentBttn>
    )
}


//TODOS: Passar esse icones para pasta.

