import React from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import img from '../public/phone.png'
import die from '../public/dei.png'
import { useRouter } from 'next/router';
import en from "../Locales/en"
import fr from "../Locales/fr"


function Hiworks() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ?   en : fr;


  return (
    <div className={styles.itworks}>
        <h2 className={styles.h2}>
          {/* How it’s done? */}
          {t.hid}
          </h2>
        <p className={styles.subtext}>
          {/* With eCare, you can Book appointments in 5 easy steps as shown below. <br></br>
           Moreover, you can choose the method of consultancy according to your needs. */}
        {t.hidp}
        </p>
        <div className={styles.section}>
            <div className={styles.left}>
                <figure className={styles.figure}>
                    <Image
                        src={img}
                        alt="apple"
                        layout="fill"
                        objectFit="contain"
                    />
                </figure>
            </div>
            <div className={styles.right}>
                <figure className={styles.figure}>
                    <Image
                        src={die}
                        alt="apple"
                        layout="fill"
                        objectFit="contain"
                    />
                </figure>
            </div>
            {/* <div className={styles.right}>
                <div className={styles.box}>
                  <div className={styles.circle}>
                    <div className={styles.num}>01</div>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.dotbox}>
                        <div className={styles.dot}></div>
                    </div>
                    <div className={styles.h3}>
                        Create Account
                    </div>
                    <div className={styles.p}>
                        First step after downloading your ecare app is to create a new account
                    </div>
                  </div>
                </div>
                <div className={styles.box2}>
                  <div className={styles.circle}>
                    <div className={styles.num}>02</div>
                  </div>
                  <div className={styles.details}>
                    <div className={styles.dotbox}>
                        <div className={styles.dot}></div>
                    </div>
                    <div className={styles.h3}>
                        Create Account
                    </div>
                    <div className={styles.p}>
                        First step after downloading your ecare app is to create a new account
                    </div>
                  </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default Hiworks