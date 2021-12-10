import React, { FormEvent, useContext, useState } from 'react'

import styles from './styles.module.css'

import { api } from '../../services/api'
import { GlobalContext } from '../../contexts/GlobalContext'

export function Modal() {
  const { closeModal, updateIsServiceChange, updateServices, services } =
    useContext(GlobalContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [budget, setBudget] = useState('')

  function resetForm() {
    setTitle('')
    setDescription('')
    setDeadline('')
    setBudget('')
  }

  async function handleFormSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      description: !description ? 'Sem descrição' : description,
      deadline,
      status: 'inProgress',
      budget: Number(budget),
    }

    try {
      const response = await api.post('/services', data)

      const { id } = response.data

      const service = { id, ...data }

      updateServices([service, ...services])

      console.log('Serviço criado' + service)
    } catch {
      const message = 'Erro ao salvar serviço na API'
      console.error(message)
      alert(message)
    }

    updateIsServiceChange()
    resetForm()
    closeModal()
  }

  function handleClickResetButton() {
    resetForm()
    closeModal()
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
              value={title}
              onChange={(event) => setTitle(event.target.value)}
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
              value={description}
              onChange={(event) => setDescription(event.target.value)}
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
              step={0.01}
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
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
              value={deadline}
              onChange={(event) => setDeadline(event.target.value)}
              required
            />
          </div>
          <div className={styles.buttons}>
            <button
              type="reset"
              className={`${styles.button} ${styles.secondaryButton}`}
              onClick={handleClickResetButton}
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
