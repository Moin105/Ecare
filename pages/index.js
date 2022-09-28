import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import Context from '../Components/Context'
import Banner from '../Components/Banner'
import Platform from '../Components/Platform'
import Hiworks from '../Components/Hiworks'
import Wcare from '../Components/Wcare'
import Contact from '../Components/Contact'
import Getstarted from '../Components/Getstarted'
import Footer from '../Components/Footer'
import MyCarousel from '../Components/Customer'
import AboutUs from '../Components/AboutUs'
import Social from '../Components/Social'
export default function Home() {
  const [show , setShow] = useState(true)
  return (
    <div className={styles.container}>
     <Header setShow={setShow}/>
 {show &&   <>
 <Social/>
  <Context/>
     <Banner/>
     <Platform/>
     <Hiworks/>
     <Wcare/>
     <Contact/>
     <AboutUs/>
     <MyCarousel/>
     <Getstarted/>
     <Footer/>
 </>}
    </div>
  )
}
