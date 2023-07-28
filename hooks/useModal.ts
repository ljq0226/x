import { ModalStore } from '@/store'

function useModal() {
  const isModalOpen = ModalStore(s => s.isModalOpen)
  const setIsModalOpen = ModalStore(s => s.setIsModalOpen)
  return { isModalOpen, setIsModalOpen }
}

export default useModal
