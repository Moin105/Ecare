import React from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import sc from '../public/sc.png'
import ed from '../public/ed.png'
import euf from '../public/euf.png'
import { useRouter } from 'next/router';
import en from "../Locales/en"
import fr from "../Locales/fr"

function Wcare() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ?   en : fr;
  return (
    <div className={styles.wcare}id="why">
             <h2 className={styles.h2}>
                {/* Why eCare? */}
{t.wecare}
                </h2>
        <p className={styles.subtext}>
            {t.web}
            {/* With eCare, you control the course of treatment. We back <br></br>
you up. Make confident decisions in the moments of care with eCare. */}
        </p>
        <div className={styles.row1}>
           <div className={styles.docbox}>
               <div className={styles.circle}>
                    <figure className={styles.figure}>
                        <Image
                            src={sc}
                            alt="apple"
                            layout="fill"
                            objectFit="contain"
                        />
                    </figure>
               </div>
               <h4 className={styles.h4}>{t.weh}</h4>
               <p className={styles.p}>{t.wep}</p>
           </div>

           <div className={styles.docbox}>
               <div className={styles.circle}>
                    <figure className={styles.figure}>
                        <Image
                            src={ed}
                            alt="apple"
                            layout="fill"
                            objectFit="contain"
                        />
                    </figure>
               </div>
               <h4 className={styles.h4}>{t.weh2}</h4>
               <p className={styles.p}>{t.wep2}</p>
           </div>

        </div>
        <div className={styles.row2}>
        <div className={styles.docbox}>
               <div className={styles.circle}>
                    <figure className={styles.figure}>
                        <Image
                            src={euf}
                            alt="apple"
                            layout="fill"
                            objectFit="contain"
                        />
                    </figure>
               </div>
               <h4 className={styles.h4}>{t.weh3}</h4>
               <p className={styles.p}>{t.wep3}</p>
           </div>
        </div>
    </div>
  )
}

export default Wcare