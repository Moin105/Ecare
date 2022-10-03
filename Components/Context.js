import React,{useEffect} from 'react'
import styles from '../styles/Home.module.css'
import google from '../public/google.png'
import Image from "next/image";
import apple from '../public/apple.png'
import { useRouter } from 'next/router';

import en from "../Locales/en"
import fr from "../Locales/fr"
function Context() {
  const router = useRouter();
  useEffect(() => {
    fetch('https://www.admin.ecareserve.com/api/show_links') 
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }else{
        console.log("res");
      }
    })
      .then((res) => {
        console.log(res);
      //   setResponse(res.message);
        console.log("safa",res);
      });
  
  }, [])
  
  const { locale } = router;
  const t = locale === 'en' ?   en : fr;
  // console.log("SADAPAY",process.env.REACT_APP_API_KEY)
  return (
    <div className={styles.context} id='context'>
        <h2 className={styles.h2}>
          {t.bh}
          {/* Automated Solution<br></br> for Your Healthcare Needs! */}
        </h2>
        <p className={styles.subtext}>
        {/* The health, safety and well-being of our members, employees<br></br> 
        and the communities we serve is our top priority.  */}
        {t.cp}
        </p>
        <div className={styles.links}>
        <figure className={styles.figure}>
          <Image
            src={apple}
            alt="apple"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <figure className={styles.figure}>
          <Image
            src={google}
            alt="google"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        </div>
    </div>
  )
}

export default Context