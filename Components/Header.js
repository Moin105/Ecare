import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import Image from "next/image"
import { useRouter } from 'next/router';
import Nav from './Nav'
import en from "../Locales/en"
import fr from "../Locales/fr"
import {GiHamburgerMenu} from 'react-icons/gi'
import Link from "next/link";
import login from '../public/login.png'

function Header(props) {
  const [show ,setShow] = useState(true)
  const navHandle = () => {
    console.log("$$$$$", nav);
    setNav(!nav);
  };
  const dataHandle = () => {
    setShow(!show)
    props.setShow(!show);
  };
  const [nav, setNav] = useState(false);
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
            <li><Link href="/" smooth="true">{t.home}</Link></li>
            <li><Link href="/#about" smooth="true">{t.about}</Link></li>
            <li><Link href="/#features" smooth="true">{t.mobile}</Link></li>
            <li><Link href="/#why" smooth="true">{t.features}</Link></li>
            <li><Link href="/#contact" smooth="true">Contact</Link></li>

        </ul>
    </div>
    <div className={styles.langc}>
    <Link href="http://admin.ecareserve.com/doctor_login" smooth="true">
      <button className={styles.button}>
      <figure className={styles.figure}>
          <Image
            src={login}
            alt="ecare"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        Login
      </button>
   </Link>
    <p>
    <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="fr">FR</option>
          </select>
      </p></div>
      <div className={styles.ham} onClick={()=>{
        navHandle();
        dataHandle();
      }}><GiHamburgerMenu/></div>
      {nav && <Nav setNav={setNav} setShows={props.setShow} />}
    </header>
  )
}

export default Header