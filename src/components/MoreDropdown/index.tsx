import React, { useContext } from 'react'

import styles from './styles.module.css'

import { GlobalContext } from '../../contexts/GlobalContext'

import { api } from '../../services/api'

import checkIcon from '../../assets/check.svg'
import deleteIcon from '../../assets/delete.svg'
import infoIcon from '../../assets/info.svg'

interface MoreDropdownProps {
  idService: string
}

export function MoreDropdown({ idService }: MoreDropdownProps) {
  const { removeService } = useContext(GlobalContext)

  return (
    <ul className={styles.dropdown}>
      <li className={styles.dropdownItem}>
        <button>
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
        <button>
          <img src={infoIcon} alt="Detalhes" />
          Detalhes
        </button>
      </li>
    </ul>
  )
}
