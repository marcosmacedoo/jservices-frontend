import React, { useState } from 'react'

import styles from './styles.module.css'

import { MoreDropdown } from '../MoreDropdown'

import moreIcon from '../../assets/more.svg'


export function CardService() {
  const [openMoreDropdown, setMoreDropdown] = useState(false)

  const updateMoreDropdown = () => setMoreDropdown(!openMoreDropdown)

  return (
    <article className={styles.cardService}>
      <header className={styles.cardServiceHeader}>
        <h3>Manutenção e Limpeza de Split</h3>
        <button
          className={styles.cardServiceHeaderMore}
          onClick={updateMoreDropdown}
        >
          <img src={moreIcon} alt="Opções" />
        </button>
        {openMoreDropdown && <MoreDropdown />}
      </header>
      <p className={styles.cardServiceDescription}>
        É preciso realizar a limpeza e a manutenção de um ar-condicionado da LG
        12000 btus modelo 2015. O serviço será em domicílio
      </p>
      <footer className={styles.cardServiceFooter}>
        <p>01/01/2021</p>
        <p>R$150,00</p>
      </footer>
    </article>
  )
}
