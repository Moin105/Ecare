import React from 'react'
import styles from '../styles/Home.module.css'
import Card from './Card'
import upload from '../public/upload.png'
import av from '../public/av.png'
import nh from '../public/nh.png'
import raf from '../public/raf.png'
import { useRouter } from 'next/router';
import en from "../Locales/en"
import fr from "../Locales/fr"

function Platform() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ?   en : fr;


  return (
    <div className={styles.platform}>
        <h2 className={styles.h2}>
          {t.pep}
           {/* One Platform, Endless Potential! */}
        </h2>
        <p className={styles.subtext}>
         {t.pepp}
          {/* Search for doctors, specialities, treatments, hospitals and services.<br></br>
          Find doctor’s reviews and book appointment online, all using the eCare app.  */}
        </p>
        <div className={styles.row}>
          <Card heading="Upload Prescription"des="Doctor can recommend lab tests and upload prescription using eCareDocta mobile app." img={upload} />
          <Card heading="In-App Video call"des="You can consult your doctor for your medical needs from the comfort of your house." img={av}/>
          <Card heading="Nearby Hospitals"des="Find and book the best doctors from nearby hospitals based on reviews. " img={nh}/>
          <Card heading="Refer a Friend"des="Refer your friend and earn reward in the form of bonus points" img={raf}/>
        </div>
    </div> 
  )
}

export default Platform