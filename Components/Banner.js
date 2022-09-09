import React from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import banner from '../public/banner.png'


function Banner() {
  return (
    <div className={styles.ban}>
           <figure className={styles.banner}>
          <Image
            src={banner}
            alt="ecare"
            layout="fill"
            objectFit="contain"
          />
        </figure>
    </div>
  )
}

export default Banner