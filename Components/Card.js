import React from 'react'
import Image from "next/image";
import styles from '../styles/Home.module.css'

function Card(props) {
  return (
    <div className={styles.card}>

        <div className={styles.ils}>
        <figure className={styles.figure}>
          <Image
            src={props.img}
            alt="apple"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        </div>
        <div className={styles.subheading}>{props.heading}</div>
        <p className={styles.description}>{props.des}</p>
    </div>
  )
}

export default Card