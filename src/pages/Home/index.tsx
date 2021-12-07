import React from 'react'

import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { CardService } from '../../components/CardService'

export function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <h2 className='gone'>Lista de serviços</h2>
          <ul className={styles.listServices}>
            <li className={styles.cardItem}>
              <CardService />
            </li>
            <li className={styles.cardItem}>
              <CardService />
            </li>
            <li className={styles.cardItem}>
              <CardService />
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
