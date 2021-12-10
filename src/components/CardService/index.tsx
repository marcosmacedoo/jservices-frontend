import React, { useState } from 'react'

import styles from './styles.module.css'

import { MoreDropdown } from '../MoreDropdown'

import moreIcon from '../../assets/more.svg'
import { formatDate } from '../../utils/formatDate'

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

interface CardServicesProps {
  service: Service
}

export function CardService({ service }: CardServicesProps) {
  const [openMoreDropdown, setMoreDropdown] = useState(false)

  const updateMoreDropdown = () => setMoreDropdown(!openMoreDropdown)

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
        {openMoreDropdown && <MoreDropdown idService={service.id} />}
      </header>
      <p className={styles.cardServiceDescription}>{service.description}</p>
      <footer className={styles.cardServiceFooter}>
        <p>{formatDate(service.deadline)}</p>
        <p>R${service.budget.toFixed(2)}</p>
      </footer>
    </article>
  )
}
