import { AiOutlinePlus, AiFillCloseCircle } from 'react-icons/ai'

import { BsFillCartCheckFill, BsTrash3 } from 'react-icons/bs'

import * as S from "./styled"
import * as I from "./types"
import * as useStore from '@/hooks/useStore'

export function Button({configCss, onClick, text}: any) {
    return (
          <S.Button className={configCss} onClick={onClick}>{text}</S.Button>
    )
}
export function ButtonAdd({ConfigCss, onClick, Status}: any) {
    return (
        <S.ButtonAdd onClick={onClick} className={ConfigCss}>
            {
                Status ? <AiOutlinePlus className="iconPlus"/> : <BsFillCartCheckFill className="iconAdded" />
            }
        </S.ButtonAdd>
    )
}
export function ButtonContact({text}:I.ButtonContact) {
    return (
        <S.ButtonTell>{text}</S.ButtonTell>
    )
}
export function ButtonCounter({Symbols, onClick}:any){
    return (
        <S.BttnCount onClick={onClick} type={Symbols}>
            {Symbols}
        </S.BttnCount>
    )
}
export function ButtonCloseModal({ConfigCss}:any) {
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
        <S.ButtonClose className={ConfigCss} onClick={handleClick}>
            <AiFillCloseCircle className="iconClose"/>
        </S.ButtonClose>
    )
}
export function ButtonRemoveCart({ConfigCss, onClick}:any) {
    return (
        <S.ButtonRemove className={ConfigCss} onClick={onClick}>
            <BsTrash3 className="iconTrash"/>
        </S.ButtonRemove>
    )
}
export function CheckoutButtons({text, onClick}: any) {
    return ( 
        <S.ButtonPayment onClick={onClick}>
            <S.Text>{text}</S.Text>
        </S.ButtonPayment>
    )
}
export function PaymentButtons({text, onClick}: any) {
    return (
        <S.OptionsPaymentBttn onClick={onClick}>
            {text}
        </S.OptionsPaymentBttn>
    )
}


//TODOS: Passar esse icones para pasta.

