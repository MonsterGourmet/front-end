export interface IMdl_StateAction {
     sttsModal: boolean,
     infoModal: {
       type: string,
       Model: string
     },
   
     alteredSttsModal: (stts: boolean) => any,
     alteredInfoModal: (info: any) => any,
}
   
export interface IMnu_StateAction {
     optionBar: string,
   
     setOptionMenu: (optn: string) => any
   }
   