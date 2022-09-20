import React from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image"


function Review(props) {
  return (
    <>
    <div className={styles.review}>
        <p>{props.review}</p>
        <div className={styles.textdetails}>
        <figure className={styles.figure}>
          <Image
            src={props.img}
            alt="dp"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <div className={styles.staras}>
          <h3>{props.name}</h3>
          <figure className={styles.figure}>
          <Image
            src={props.img2}
            alt="stars"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        </div>
        </div>
    </div>
     

    </>
  )
}

export default Review