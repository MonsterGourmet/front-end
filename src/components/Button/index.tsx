import { SText } from "../Info/styled"
import { SButton, SButtonCategory, SButtonTell } from "./styled"
//TODOS: Passe para return implicito
interface IButtonContact {
    text: string
}

interface IButtonCategory {
    text: string
}

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

export function ButtonCategory({text}: IButtonCategory) {
    return (
        <SButtonCategory>
            <p>{text}</p>
        </SButtonCategory>
    )
}