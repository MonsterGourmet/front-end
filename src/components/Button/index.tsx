import { SButton, SButtonTell } from "./styled"

interface IButtonContact {
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