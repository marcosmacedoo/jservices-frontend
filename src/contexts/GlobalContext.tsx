import React, { createContext, ReactNode, useState } from 'react'

interface GlobalContextProps {
  isOpenModal: boolean
  closeModal: () => void
  openModal: () => void
}

interface GlobalProviderProps {
  children: ReactNode
}

export const GlobalContext = createContext({} as GlobalContextProps)

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const closeModal = () => setIsOpenModal(false)

  const openModal = () => setIsOpenModal(true)

  return (
    <GlobalContext.Provider value={{ isOpenModal, closeModal, openModal }}>
      {children}
    </GlobalContext.Provider>
  )
}
