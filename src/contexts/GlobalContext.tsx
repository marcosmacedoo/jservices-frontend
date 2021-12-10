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
  finishedService: (idService: string) => Promise<void>
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
  const [servicesApi, setServicesApi] = useState<Service[]>([])
  const [isServiceChange, setIsServiceChange] = useState(false)

  const closeModal = () => setIsOpenModal(false)

  const openModal = () => setIsOpenModal(true)

  const updateActiveTab = (tab: string) => setActiveTab(tab)

  const updateIsServiceChange = () => setIsServiceChange(!isServiceChange)

  const updateServices = (services: Service[]) => setServices(services)

  function removeService(idService: string) {
    setServicesApi(services.filter((service) => service.id !== idService))

    // await api.delete(`/services/${idService}`)

    // updateIsServiceChange()
  }

  async function finishedService(idService: string) {
    const _services = services.map((service) => {
      if (service.id === idService)
        return {
          ...service,
          status: 'finished',
        }

      return service
    })

    console.log(_services)

    setServicesApi(_services)

    await api.put(`/services/${idService}/edit/status/finished`)
  }

  useEffect(() => {
    async function loadServices() {
      const response = await api.get(`services`)

      setServicesApi(response.data)
    }

    loadServices()
  }, [])

  useEffect(() => {
    setServices(servicesApi.filter((service) => service.status === activeTab))
  }, [activeTab, servicesApi])

  // useEffect(() => console.log(services), [services])

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
        finishedService,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
