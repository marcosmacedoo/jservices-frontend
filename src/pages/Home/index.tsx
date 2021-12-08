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
        <section className={styles.sectionFilters}>
          <h2 className={styles.h2}>Seus serviços</h2>
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${styles.tabActive}`}>
              Em andamento(6)
            </button>
            <button className={styles.tab}>Finalizados(0)</button>
          </div>
          <form className={styles.form}>
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
                placeholder="Pesquise por algum serviço"
              />
            </div>
            <select name="orders" className={styles.select}>
              <option value="most-recent" selected>
                Mais recente
              </option>
              <option value="most-older">Mais antigo</option>
              <option value="biggest-budget">Maior orçamento</option>
              <option value="smallest-budget">Menor orçamento</option>
            </select>
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
