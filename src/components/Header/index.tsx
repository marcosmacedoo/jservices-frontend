import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import '../../styles/global.css'
import styles from './styles.module.css'

import { GlobalContext } from '../../contexts/GlobalContext'

export function Header() {
  const { openModal } = useContext(GlobalContext)

  return (
    <header className={styles.header}>
      <div className="mainContainer">
        <Link to="/">
          <h1 className={styles.h1}>JServices</h1>
        </Link>
        <button className={styles.primaryButton} onClick={() => openModal()}>
          Cadastrar Serviço
        </button>
      </div>
    </header>
  )
}
