'use client'
import * as S from "./waiting.style"

import * as useStore from '@/hooks/useStore'

import Profile from "../../../public/LogoOficcial.png"

import { useEffect, useState } from "react"

import { IconCart, LogoImage } from "../Icons"

import Link from 'next/link'

//Todos: Passar para provider, LÓGICA DE DIAS

export function AwaitHeader() {    

    return (
        <S.Header>
            <S.Figure></S.Figure>
            <S.IconCart></S.IconCart>
        </S.Header>
    )
 }
 