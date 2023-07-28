import { create } from 'zustand'

interface ModalState {
  isModalOpen: boolean
  setIsModalOpen: (v: boolean) => void
}

const ModalStore = create<ModalState>(set => ({
  isModalOpen: false,
  setIsModalOpen: v => set(() => ({
    isModalOpen: v,
  })),
}))

export default ModalStore
