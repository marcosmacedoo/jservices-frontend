import React, { useEffect, useState, useContext } from 'react'

import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { Modal } from '../../components/Modal'
import { CardService } from '../../components/CardService'

import { GlobalContext } from '../../contexts/GlobalContext'

import searchIcon from '../../assets/search.svg'

export function Home() {
  const { services, updateActiveTab, activeTab } = useContext(GlobalContext)

  const [activeOrder, setActiveOrder] = useState('most-recent')
  const [searchService, setSearchService] = useState('')

  const { isOpenModal } = useContext(GlobalContext)

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.sectionFilters}>
          <h2 className={styles.h2}>Seus serviços</h2>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === 'inProgress' && styles.tabActive
              }`}
              onClick={() => updateActiveTab('inProgress')}
            >
              Em andamento
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === 'finished' && styles.tabActive
              }`}
              onClick={() => updateActiveTab('finished')}
            >
              Finalizados
            </button>
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
                value={searchService}
                onChange={(event) => setSearchService(event.target.value)}
              />
            </div>
            <label htmlFor="orders" className="gone">
              Ordenações
            </label>
            <select
              id="orders"
              name="orders"
              className={styles.select}
              defaultValue={activeTab}
              onChange={(event) => setActiveOrder(event.target.value)}
            >
              <option value="most-recent">Mais recente</option>
              <option value="most-older">Mais antigo</option>
              <option value="biggest-budget">Maior orçamento</option>
              <option value="smallest-budget">Menor orçamento</option>
            </select>
          </form>
        </section>
        <section>
          <h2 className="gone">Lista de serviços</h2>
          <ul className={styles.listServices}>
            {services?.map((service) => (
              <li className={styles.cardItem} key={service.id}>
                <CardService service={service} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      {isOpenModal && <Modal />}
    </>
  )
}
