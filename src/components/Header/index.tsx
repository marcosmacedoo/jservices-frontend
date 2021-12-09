import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/global.css'
import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className="mainContainer">
        <Link to="/">
          <h1 className={styles.h1}>JServices</h1>
        </Link>
        <button className={styles.primaryButton}>Cadastrar Serviço</button>
      </div>
    </header>
  )
}
