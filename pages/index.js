import Head from 'next/head'
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
export default function Home() {
  return (
    <div className={styles.container}>
     <Header/>
     <Context/>
     <Banner/>
     <Platform/>
     <Hiworks/>
     <Wcare/>
     <Contact/>
     <Getstarted/>
     <Footer/>
    </div>
  )
}
