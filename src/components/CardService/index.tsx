import React, { useState } from 'react'

import styles from './styles.module.css'

import { MoreDropdown } from '../MoreDropdown'

import moreIcon from '../../assets/more.svg'

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

interface CardServicesProps {
  service: Service
}

export function CardService({ service }: CardServicesProps) {
  const [openMoreDropdown, setMoreDropdown] = useState(false)

  const updateMoreDropdown = () => setMoreDropdown(!openMoreDropdown)

  function formatDate(date: string) {
    const dateObject = new Date(date)

    const day = dateObject.getDate()
    const month = dateObject.getMonth() + 1
    const year = dateObject.getFullYear()
    const formattedDate = `${day}/${month}/${year}`

    return formattedDate
  }

  return (
    <article className={styles.cardService}>
      <header className={styles.cardServiceHeader}>
        <h3>{service.title}</h3>
        <button
          className={styles.cardServiceHeaderMore}
          onClick={updateMoreDropdown}
        >
          <img src={moreIcon} alt="Opções" />
        </button>
        {openMoreDropdown && <MoreDropdown />}
      </header>
      <p className={styles.cardServiceDescription}>{service.description}</p>
      <footer className={styles.cardServiceFooter}>
        <p>{formatDate(service.deadline)}</p>
        <p>R${service.budget.toFixed(2)}</p>
      </footer>
    </article>
  )
}
