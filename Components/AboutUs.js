import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import re from '../public/re.png'
import le from '../public/le.png'
import { useRouter } from 'next/router';
import en from "../Locales/en"
import fr from "../Locales/fr"
function AboutUs() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ?   en : fr;
  return (
    <div className={styles.about} id='about'>
        <h2 className={styles.h2}>{t.gits}</h2>
        <p className={styles.p}>{t.giths}</p>
        <div className={styles.sep}>
            <div className={styles.left}>
                <figure className={styles.figure}>
                <Image
                    src={re}
                    alt="apple"
                    layout="fill"
                    objectFit="contain"
                        />
                </figure>
            </div>
            <div className={styles.right}>
                <h2 className={styles.h2}>{t.nmh}</h2>
                <p className={styles.p}>{t.nmp}</p>
            </div>
        </div>
        <div className={styles.sep2}>
            <div className={styles.left}>
                <figure className={styles.figure}>
                <Image
                    src={le}
                    alt="apple"
                    layout="fill"
                    objectFit="contain"
                        />
                </figure>
            </div>
            <div className={styles.right}>
                <h2 className={styles.h2}>{t.nmhl}</h2>
                <p className={styles.p}>{t.nmpl}</p>
            </div>
        </div>
        </div>
  )
}

export default AboutUs