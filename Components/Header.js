import React from 'react'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import Image from "next/image"
import { useRouter } from 'next/router';

import en from "../Locales/en"
import fr from "../Locales/fr"

function Header() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ?   en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
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
            <li>{t.home}</li>
            <li>{t.about}</li>
            <li>{t.mobile}</li>
            <li>Features</li>
        </ul>
    </div>
    <div className={styles.langc}><p>
    <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="fr">FR</option>
          </select>
      </p></div>

    </header>
  )
}

export default Header