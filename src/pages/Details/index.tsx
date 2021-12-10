import React, { FormEvent, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import styles from './styles.module.css'

import { Header } from '../../components/Header'
import { api } from '../../services/api'
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

export function Details() {
  const params = useParams() as { id: string }

  const [service, setService] = useState<Service>()

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
  }

  useEffect(() => {
    async function laodService() {
      const response = await api.get(`/services/${params.id}`)

      setService(response.data)
    }

    laodService()
  }, [])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <p className={styles.breadcrumbs}>
            <Link to="/">Home</Link> {'>'}{' '}
            <Link to="/details/1">{service?.title}</Link>
          </p>
          <article className={styles.article}>
            <h2>{service?.title}</h2>
            <p>{service?.description}</p>
            <ul className={styles.listInfo}>
              <li className={styles.listInfoItem}>
                <h3>Data de término</h3>
                <span>
                  {service?.deadline && formatDate(service?.deadline)}
                </span>
              </li>
              <li className={styles.listInfoItem}>
                <h3>Status</h3>
                <span>
                  {service?.status === 'inProgress'
                    ? 'Em andamento'
                    : 'Finalizado'}
                </span>
              </li>
              <li className={styles.listInfoItem}>
                <h3>Orçamento</h3>
                <span>R${service?.budget.toFixed(2)}</span>
              </li>
            </ul>
          </article>
          <section className={styles.sectionComments}>
            <h2 className="gone">Comentários</h2>
            <form className={styles.form} onSubmit={handleFormSubmit}>
              <label htmlFor="comment" className={styles.label}>
                Comentário
              </label>
              <textarea
                className={styles.textarea}
                name="comment"
                id="comment"
                placeholder="Comente algo sobre o serviço"
                rows={6}
              ></textarea>
              <p className={styles.buttons}>
                <button
                  type="reset"
                  className={`${styles.button} ${styles.secondaryButton}`}
                >
                  Limpar
                </button>
                <button
                  type="submit"
                  className={`${styles.button} ${styles.primaryButton}`}
                >
                  Comentar
                </button>
              </p>
            </form>
            <h3>2 comentários</h3>
            <ul className={styles.listComments}>
              <li>
                A peça de fusão apresentou problemas no lado positivo (+). Então
                foi feita a compra de outra peça no valor de R$49,90.
              </li>
              <li>O nome do Cliente é Isabelle Fontes</li>
            </ul>
          </section>
        </div>
        <ul className={styles.buttonsContainer}>
          <li>
            <button
              className={`${styles.optionButton} ${styles.optionButtonGreen}`}
            >
              Finalizar
            </button>
          </li>
          <li>
            <button
              className={`${styles.optionButton} ${styles.optionButtonBlue}`}
            >
              Editar
            </button>
          </li>
          <li>
            <button
              className={`${styles.optionButton} ${styles.optionButtonRed}`}
            >
              Apagar
            </button>
          </li>
        </ul>
      </main>
    </>
  )
}
