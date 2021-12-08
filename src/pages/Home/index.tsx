import React from 'react'

import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { CardService } from '../../components/CardService'

import searchIcon from '../../assets/search.svg'

export function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <form>
            <div className={styles.inputGroup}>
              <img
                src={searchIcon}
                alt="Lupa de pesquisa"
                className={styles.searchIcon}
              />
              <label htmlFor="search-service" className="gone">
                Pesquise por algum serviço
              </label>
              <input
                type="text"
                className={styles.inputSearch}
                id="search-service"
                name="search-service"
                placeholder="Pesquise por aqui por seu serviço"
              />
            </div>
          </form>
        </section>
        <section>
          <h2 className="gone">Lista de serviços</h2>
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
