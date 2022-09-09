import React from 'react'
import styles from '../styles/Home.module.css'
import google from '../public/google.png'
import Image from "next/image";
import apple from '../public/apple.png'
function Context() {
  return (
    <div className={styles.context}>
        <h2 className={styles.h2}>
          Automated Solution<br></br> for Your Healthcare Needs!
        </h2>
        <p className={styles.subtext}>
        The health, safety and well-being of our members, employees<br></br> 
        and the communities we serve is our top priority. 
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