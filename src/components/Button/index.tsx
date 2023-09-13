import { AiOutlinePlus, AiFillCloseCircle } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'

import * as S from "./styled"
import * as I from "./types"
import * as useStore from '@/hooks/useStore'

export function Button() {
    return (
          <S.Button>Olá</S.Button>
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

//TODOS: Passar esse icones para pasta.

