import { Categories, Footer, Header, Information, Menu } from "@/components"
import { Modal } from "@/components/Modal"

//TODOS: Semantic, Align, Clean Code, Organization, Desacoplamento, Details, DefaultCode(Prettier and Eslinter), 'use client', CSS Advanced.

const Home = () => (
  <>
    <Header/>
    <Information />
    <Categories />
    <Menu />
    <Footer />
    <Modal />
  </>
)

export default Home