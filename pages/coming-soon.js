import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Image from "next/image";
import coming from '../public/comingsoon.png'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function ComingSoon() {
    const [show , setShow] = useState(true)

  return (
  <div className={styles.container}>
     {/* <Header setShow={setShow}/> */}
 
    <figure className={styles.comingsoon}>
        <Image
           src={coming}
           alt="ecare"
           layout="fill"
           objectFit="contain"
        />
    </figure>
     {/* <Footer/> */}
 
    </div>
  )
}

export default ComingSoon