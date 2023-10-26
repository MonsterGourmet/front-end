import { Categories, Footer, Header, Information, Menu } from "@/components"

import { ModalVisibilityControl } from "@/components/Modal"

//TODOS: Semantic, Align, Clean Code, Organization, Desacoplamento, Details, DefaultCode(Prettier and Eslinter), 'use client', CSS Advanced.

const ScreenHome = () => (
  <>
    <Header/>
    <Information />
    <Categories />
    <Menu />
    <Footer />
    <ModalVisibilityControl />
  </>
)

export default ScreenHome