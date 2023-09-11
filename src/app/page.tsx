import { Categories, Footer, Header, Information, Menu } from "@/components"
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