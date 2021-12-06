import React from 'react'

import '../../styles/global.css'
import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className="mainContainer">
        <h1 className={styles.h1}>JServices</h1>
        <button className={styles.primaryButton}>Cadastrar Serviço</button>
      </div>
    </header>
  )
}
