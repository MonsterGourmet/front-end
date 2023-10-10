import { Cart } from '@/components/Cart'
import { AwaitCart } from '@/components/Cart/warning'
import { ModalVisibilityControl } from '@/components/Modal'
import Image from 'next/image'

const ScreenCart = () => (
  <>
    <Cart />
    <ModalVisibilityControl />
  </>


)

export default ScreenCart