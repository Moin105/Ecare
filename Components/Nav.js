import React from "react";
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import {MdArrowForwardIos} from 'react-icons/md'
import login from '../public/login.png'
import { useRouter } from 'next/router';

import en from "../Locales/en"
import fr from "../Locales/fr"

// import styles from '../styles/Home.module.css'
// import logo from "../public/logo.png";
import Image from "next/image";
// import toggle from "../public/dropdown.png";
import Link from "next/link";
function Nav(props) {
  const navHandle = () => {
    console.log(props)
    props.setNav(false);
  };
  const dataHandle = () => {
    props.setShows(true);
  };
  
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ?   en : fr;
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  return (
    <div className={styles.mobilenav}>
      {" "}
      <div className={styles.mobileback}>
        <div onClick={()=>{
            navHandle();
            dataHandle();
          }}  className={styles.arrow}>
          {" "}<MdArrowForwardIos/>
          {/* <figure>
            <Image
              src={logo}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure> */}
        </div>
      </div>
      <div className={styles.mobilebar}>
        <figure className={styles.hlogo}>
          <Image
            src={logo}
            alt="OBS TECHNOLOGIA"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <ul className={styles.uppernav}>
          <li onClick={()=>{
            navHandle();
            dataHandle();

          }}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={()=>{
            navHandle();
            dataHandle();

          }}>
            <Link href="/#about">About</Link>
          </li>
          <li  onClick={()=>{
            navHandle();
            dataHandle();

          }}>
            <Link href="/#services">How it works </Link>
          </li>
          <li  onClick={()=>{
            navHandle();
            dataHandle();

          }}>
            <Link href="/#contact">Why us</Link>
          </li>
          <li  onClick={()=>{
            navHandle();
            dataHandle();

          }}>
            <Link href="/#contact">Contact us</Link>
          </li>
          <li >
            {" "}
            <p>
    <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="fr">FR</option>
          </select>
      </p>
          </li>
          <li>
          <a href="https://admin.ecareserve.com/doctor_login" smooth="true">
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
   </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;