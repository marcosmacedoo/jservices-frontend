import React, { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../services/api'

interface GlobalContextProps {
  isOpenModal: boolean
  services: Service[]
  activeTab: string
  closeModal: () => void
  openModal: () => void
  updateActiveTab: (tab: string) => void
}

interface GlobalProviderProps {
  children: ReactNode
}

interface Service {
  id: string
  title: string
  description: string
  created_at: string
  updated_at: string
  status: string
  comments: string[]
  budget: number
  deadline: string
}

export const GlobalContext = createContext({} as GlobalContextProps)

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [activeTab, setActiveTab] = useState('inProgress')
  const [services, setServices] = useState<Service[]>([])

  const closeModal = () => setIsOpenModal(false)

  const openModal = () => setIsOpenModal(true)

  const updateActiveTab = (tab: string) => setActiveTab(tab)

  useEffect(() => {
    async function loadServices() {
      const response = await api.get(`services?status=${activeTab}`)

      setServices(response.data)
    }

    loadServices()
  }, [activeTab])

  useEffect(() => console.log(services), [services])

  return (
    <GlobalContext.Provider
      value={{
        isOpenModal,
        closeModal,
        openModal,
        services,
        activeTab,
        updateActiveTab,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
