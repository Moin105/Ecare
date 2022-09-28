import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import en from "../Locales/en"
import fr from "../Locales/fr"
import Link from "next/link";

function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ?   en : fr;
    const [inputs, setInputs] = useState({
        email: "",
      });
  return (
    <div className={styles.footer} id='footer'>
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
              <li className={styles.li}><Link href="/#about" smooth="true">{t.about}</Link></li>          
             
              <li className={styles.li}><Link href="/#features" smooth="true">Features</Link></li>
              <li className={styles.li}><Link href="/#contact" smooth="true">Contact</Link></li> 
              <li className={styles.li}><Link href="/#why" smooth="true">{t.features}</Link></li>
                {/* <li className={styles.li}>About Us</li>
                <li className={styles.li}>How it works?</li>
                <li className={styles.li}>Features</li>
                <li className={styles.li}>Why us?</li> */}
              </ul>
              <ul className={styles.list2}>
              <a href='https://www.facebook.com/profile.php?id=100086304606356'> <li className={styles.li}>Facebook</li></a>
              <a href="https://twitter.com/ecare_med" >  <li className={styles.li}>Twitter</li></a>
              <a href="https://www.instagram.com/ecareDocta/"><li className={styles.li}>Instagram</li></a>
              </ul>
        </div>
        <div className={styles.bfooter}>{t.cr}</div>
    </div>
  )
}

export default Footer