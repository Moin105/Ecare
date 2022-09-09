import React from 'react'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import Image from "next/image";


function Header() {
  return (
    <header className={styles.header}>
   <figure className={styles.logo}>
          <Image
            src={logo}
            alt="ecare"
            layout="fill"
            objectFit="contain"
          />
        </figure>
    <div className={styles.nav}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Mobile Apps</li>
            <li>Features</li>
        </ul>
    </div>
    <div className={styles.langc}><p>En</p></div>

    </header>
  )
}

export default Header