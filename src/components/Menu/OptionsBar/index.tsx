'use client'

import  Monster  from "../../../../public/IconMonster.jpg"


import { SText } from "../styled";

import { useState } from "react";

import { loadDataOnCategory } from "../../../../database/server";

import { NavBarHorizontal, SOption } from "./styled";

import Image from "next/image";

export function Options() {
     const [ optionSelected, setOptionSelected] = useState('all')

     return (
          <NavBarHorizontal>
               <ul>
               {
                    loadDataOnCategory.map(item => {
                         return(
                              <SOption key={item.category} onClick={()=>setOptionSelected(item.category)}>
                                  <SText className={"Option"}>{item.category}</SText>
                                  <Image className={"Icon"} src={Monster} alt="Logo" />
                              </SOption>
                         )
                    })
               }
               </ul>
          </NavBarHorizontal>
     )
}
