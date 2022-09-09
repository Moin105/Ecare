 import React from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import kali from '../public/kali.png'
function Getstarted() {
  return (
    <div className={styles.getstarted}>
        <figure className={styles.figure}>
        <Image
                    src={kali}
                    alt="apple"
                    layout="fill"
                    objectFit="contain"
                        />
        </figure>
        <div className={styles.transparent}>
            <div className={styles.left}><h2 className={styles.h2}>Connect<br></br> with Your patients from anywhere!</h2></div>
            <div className={styles.right}><p className={styles.p}>Get more appointments through online bookings
Create and view patient records from anywhere
Manage your schedule efficiently.</p>
<button className={styles.button}>Get started</button>
</div>
           
        </div>
    </div>
  )
}

export default Getstarted