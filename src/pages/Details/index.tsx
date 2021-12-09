import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

import { Header } from '../../components/Header'

export function Details() {
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <p className={styles.breadcrumbs}>
            <Link to="/">Home</Link> {'>'}{' '}
            <Link to="/details/1">Manutenção e Limpeza de Split</Link>
          </p>
          <article className={styles.article}>
            <h2>Manutenção e Limpeza de Split</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui porta
              vel aenean odio morbi nunc. Tortor diam, enim ultrices turpis id
              morbi amet neque. Eu nulla massa scelerisque mauris. Pellentesque
              sodales suspendisse Nibh iaculis mattis iaculis scelerisque
              quisque ut. Consectetur lobortis vitae aenean ut tincidunt in nibh
              et{' '}
            </p>
            <ul className={styles.listInfo}>
              <li className={styles.listInfoItem}>
                <h3>Data de término</h3>
                <span>04/01/2021</span>
              </li>
              <li className={styles.listInfoItem}>
                <h3>Status</h3>
                <span>Em andamento</span>
              </li>
              <li className={styles.listInfoItem}>
                <h3>Orçamento</h3>
                <span>R$150,00</span>
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
