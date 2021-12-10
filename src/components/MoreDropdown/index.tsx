import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.css'

import { GlobalContext } from '../../contexts/GlobalContext'

import checkIcon from '../../assets/check.svg'
import deleteIcon from '../../assets/delete.svg'
import infoIcon from '../../assets/info.svg'

interface MoreDropdownProps {
  idService: string
}

export function MoreDropdown({ idService }: MoreDropdownProps) {
  const navigate = useNavigate()

  const { removeService, finishedService } = useContext(GlobalContext)

  return (
    <ul className={styles.dropdown}>
      <li className={styles.dropdownItem}>
        <button onClick={() => finishedService(idService)}>
          <img src={checkIcon} alt="Concluir" />
          Concluir
        </button>
      </li>
      <li className={styles.dropdownItem}>
        <button onClick={() => removeService(idService)}>
          <img src={deleteIcon} alt="Remover" />
          Remover
        </button>
      </li>
      <li className={styles.dropdownItem}>
        <button onClick={() => navigate(`details/${idService}`)}>
          <img src={infoIcon} alt="Detalhes" />
          Detalhes
        </button>
      </li>
    </ul>
  )
}
