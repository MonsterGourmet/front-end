import { Menu } from "@/components/Menu"
import { Header } from "@/components/Header"
import { Categories } from "@/components/Categories"
import { Information } from "@/components/Info"

//TODOS: Clean Code, Organization, Desacoplamento, Details

const Home = () => (
  <>
    <Header/>
    <Information />
    <Categories />
    <Menu />
  </>
)

export default Home