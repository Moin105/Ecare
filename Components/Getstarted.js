 import React from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import kali from '../public/kali.png'
import { useRouter } from 'next/router';
import en from "../Locales/en"
import fr from "../Locales/fr"

function Getstarted() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ?   en : fr;
  
  return (
    <div className={styles.get}>
      <div className={styles.getstarted}>
        <figure className={styles.figure}>
        <Image
                    src={kali}
                    alt="apple"
                    layout="fill"
                    objectFit="contain"
                        />
        </figure>
        <div className={styles.transparent}>
            <div className={styles.left}><h2 className={styles.h2}>{t.kch}</h2></div>
            <div className={styles.right}><p className={styles.p}>{t.kcp}</p>
        <button className={styles.button}>Get started</button>
        </div>
           
        </div>
    </div>
    </div>
  )
}

export default Getstarted