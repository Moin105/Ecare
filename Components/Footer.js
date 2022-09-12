import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import en from "../Locales/en"
import fr from "../Locales/fr"
function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ?   en : fr;
    const [inputs, setInputs] = useState({
        email: "",
      });
  return (
    <div className={styles.footer}>
        <div className={styles.ufooter}>
              <div className={styles.newsletter}> 
              <h4 className={styles.h4}>{t.fnh}</h4>
              <p className={styles.p}>{t.fnp}</p>
              <div className={styles.ebox}>
              <input
                type='text'
                name='email'
                id='email'
                className={styles.input}
                placeholder='Email here'
                value={inputs.name}
                />
                <button className={styles.button}>{t.send}</button>
              </div>
              </div>
              <ul className={styles.list}>
                <li className={styles.li}>About Us</li>
                <li className={styles.li}>Android App</li>
                <li className={styles.li}>iOS App</li>
                <li className={styles.li}>How it works?</li>
                <li className={styles.li}>Features</li>
                <li className={styles.li}>Why us?</li>
              </ul>
              <ul className={styles.list2}>
                <li className={styles.li}>Facebook</li>
                <li className={styles.li}>Twitter</li>
                <li className={styles.li}>Instagram</li>
                <li className={styles.li}>LinkedIn</li>
              </ul>
        </div>
        <div className={styles.bfooter}>{t.cr}</div>
    </div>
  )
}

export default Footer