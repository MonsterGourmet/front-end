import Image from "next/image";

import  Monster  from "../../../public/IconMonster.jpg"

import { SText } from "../Menu/styled"

import { useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'

import { IButtonContact } from "./types"

import { SButton, SButtonAdd, SButtonOption, SButtonTell } from "./styled"


export function Button() {
    return (
          <SButton >Olá</SButton>
    )
}

export function ButtonContact({text}:IButtonContact) {
    return (
        <SButtonTell>{text}</SButtonTell>
    )
}

export function ButtonAdd({Config, onClick, Status}: any) {
    return (
        <SButtonAdd onClick={onClick} className={Config}>
            {
                Status ? <AiOutlinePlus className="iconPlus"/> : <BsFillCartCheckFill className="iconAdded" />
            }
        </SButtonAdd>
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

