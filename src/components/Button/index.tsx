import { AiOutlinePlus, AiFillCloseCircle } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'

import { IButtonContact } from "./types"

import { SButton, SButtonAdd, SButtonClose, SButtonOption, SButtonTell } from "./styled"
import { ScreenHomeContext } from '@/providers/ScreenHome.Context'
import { useContext } from 'react'

export function Button() {
    return (
          <SButton >Olá</SButton>
    )
}
export function ButtonAdd({ConfigCss, onClick, Status}: any) {
    return (
        <SButtonAdd onClick={onClick} className={ConfigCss}>
            {
                Status ? <AiOutlinePlus className="iconPlus"/> : <BsFillCartCheckFill className="iconAdded" />
            }
        </SButtonAdd>
    )
}
export function ButtonContact({text}:IButtonContact) {
    return (
        <SButtonTell>{text}</SButtonTell>
    )
}
export function ButtonCloseModal({ConfigCss}:any) {
    const { useModalStore } = useContext(ScreenHomeContext)

    const sttsModal = useModalStore((state:any) => state.alteredSttsModal)
    const alterInfoModal = useModalStore((state:any) => state.alteredInfoModal)

    const handleClick = () => {
        sttsModal(false)
        
        const infoModal = {
            type: '',
            Model: '',
        }

        alterInfoModal(infoModal);
      }
    return (
        <SButtonClose className={ConfigCss} onClick={handleClick}>
            <AiFillCloseCircle className="iconClose"/>
        </SButtonClose>
    )
    
}

//TODOS: Passar esse icones para pasta.

// export function ButtonOption({Selected, onClick, Item}: any) {
//     const [ optionSelected, setOptionSelected] = useState('all')

//     return (
//         <SButtonOption $isSelected={optionSelected} onClick={()=>setOptionSelected(Item.category)}>
//                 {
//                       optionSelected !== 'all' ? <SText className={"Option"}>{Item.category}</SText> :  <Image className={"Icon"} src={Monster} alt="Logo" />   
//                 }           
//         </SButtonOption>
//     )
// }

