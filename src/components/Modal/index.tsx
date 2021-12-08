import React, { FormEvent } from 'react'

import styles from './styles.module.css'

export function Modal() {

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <div className={styles.overlay}>
      <aside className={styles.modal}>
        <h2>Cadastrar serviço</h2>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={`${styles.inputGroup} ${styles.gridTwoColumns}`}>
            <label htmlFor="title" className={styles.label}>
              Título
            </label>
            <input
              type="text"
              className={`${styles.input}`}
              name="title"
              id="title"
              required
            />
          </div>
          <div className={`${styles.inputGroup} ${styles.gridTwoColumns}`}>
            <label htmlFor="description" className={styles.label}>
              Descricão (Opcional)
            </label>
            <textarea
              className={`${styles.textarea}`}
              name="description"
              id="description"
              rows={6}
            ></textarea>
          </div>
          <div className={`${styles.inputGroup}`}>
            <label htmlFor="budget" className={styles.label}>
              Orçamento
            </label>
            <input
              type="number"
              className={`${styles.input}`}
              name="budget"
              id="budget"
              min={0}
              step={0.1}
              required
            />
          </div>
          <div className={`${styles.inputGroup}`}>
            <label htmlFor="deadline" className={styles.label}>
              Data de entrega
            </label>
            <input
              type="date"
              className={`${styles.input}`}
              name="deadline"
              id="deadline"
              required
            />
          </div>
          <div className={styles.buttons}>
            <button
              type="reset"
              className={`${styles.button} ${styles.secondaryButton}`}
            >
              Fechar
            </button>
            <button
              type="submit"
              className={`${styles.button} ${styles.primaryButton}`}
            >
              Cadastrar
            </button>
          </div>
        </form>
      </aside>
    </div>
  )
}
