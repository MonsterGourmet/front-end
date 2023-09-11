export type State = {
     sttsModal: boolean
     infoModal: {
           type: string,
           Model: string
     }
}
 
export type Actions = {
     alteredSttsModal: (stts: boolean) => any,   
     alteredInfoModal: (info: any) => any,
}