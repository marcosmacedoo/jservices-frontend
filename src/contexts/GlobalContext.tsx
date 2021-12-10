import React, { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../services/api'

interface GlobalContextProps {
  isOpenModal: boolean
  services: Service[]
  activeTab: string
  closeModal: () => void
  openModal: () => void
  updateActiveTab: (tab: string) => void
  removeService: (idService: string) => void
  updateIsServiceChange: () => void
  updateServices: (services: Service[]) => void
}

interface GlobalProviderProps {
  children: ReactNode
}

interface Service {
  id: string
  title: string
  description: string
  created_at?: string
  updated_at?: string
  status: string
  comments?: string[]
  budget: number
  deadline: string
}

export const GlobalContext = createContext({} as GlobalContextProps)

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [activeTab, setActiveTab] = useState('inProgress')
  const [services, setServices] = useState<Service[]>([])
  const [isServiceChange, setIsServiceChange] = useState(false)

  const closeModal = () => setIsOpenModal(false)

  const openModal = () => setIsOpenModal(true)

  const updateActiveTab = (tab: string) => setActiveTab(tab)

  const updateIsServiceChange = () => setIsServiceChange(!isServiceChange)

  const updateServices = (services: Service[]) => setServices(services)

  function removeService(idService: string) {
    setServices(services.filter((service) => service.id !== idService))

    // await api.delete(`/services/${idService}`)

    // updateIsServiceChange()
  }

  useEffect(() => {
    async function loadServices() {
      const response = await api.get(`services?status=${activeTab}`)

      setServices(response.data)
    }

    loadServices()
  }, [])

  useEffect(() => {
    setServices(services.filter((service) => service.status === activeTab))
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
        removeService,
        updateIsServiceChange,
        updateServices,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
