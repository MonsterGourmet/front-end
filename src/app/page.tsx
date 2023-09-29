import { Categories, Footer, Header, Information, Menu } from "@/components"
import { AwaitCategories } from "@/components/Categories/warning"
import { AwaitHeader } from "@/components/Header/waiting"
import { AwaitInformation } from "@/components/Info/waiting"
import { AwaitMenu } from "@/components/Menu/waiting"
import { ModalVisibilityControl } from "@/components/Modal"

import HomeProvider from "@/providers/ScreenHome.Context"

//TODOS: Semantic, Align, Clean Code, Organization, Desacoplamento, Details, DefaultCode(Prettier and Eslinter), 'use client', CSS Advanced.

const ScreenHome = () => (
  <HomeProvider>
    <Header/>
    <Information />
    <Categories />
    <Menu />
    <Footer />
    <ModalVisibilityControl />
  </HomeProvider>
)

export default ScreenHome