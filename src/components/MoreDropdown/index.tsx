import React from 'react'

import styles from './styles.module.css'

import checkIcon from '../../assets/check.svg'
import deleteIcon from '../../assets/delete.svg'
import infoIcon from '../../assets/info.svg'

export function MoreDropdown() {
  return (
    <ul className={styles.dropdown}>
      <li className={styles.dropdownItem}>
        <button>
          <img src={checkIcon} alt="Concluir" />
          Concluir
        </button>
      </li>
      <li className={styles.dropdownItem}>
        <button>
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
