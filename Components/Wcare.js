import React from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import sc from '../public/sc.png'
import ed from '../public/ed.png'
import euf from '../public/euf.png'
function Wcare() {
  return (
    <div className={styles.wcare}>
             <h2 className={styles.h2}>Why eCare?</h2>
        <p className={styles.subtext}>With eCare, you control the course of treatment. We back <br></br>
you up. Make confident decisions in the moments of care with eCare.
        </p>
        <div className={styles.row1}>
           <div className={styles.docbox}>
               <div className={styles.circle}>
                    <figure className={styles.figure}>
                        <Image
                            src={sc}
                            alt="apple"
                            layout="fill"
                            objectFit="contain"
                        />
                    </figure>
               </div>
               <h4 className={styles.h4}>Secure communication</h4>
               <p className={styles.p}>eCare delivers the most secure form of communication, right when you need it.</p>
           </div>

           <div className={styles.docbox}>
               <div className={styles.circle}>
                    <figure className={styles.figure}>
                        <Image
                            src={ed}
                            alt="apple"
                            layout="fill"
                            objectFit="contain"
                        />
                    </figure>
               </div>
               <h4 className={styles.h4}>Experienced Doctor</h4>
               <p className={styles.p}>With eCare, you can find The Right top rated experienced Doctors For Your medical issues.


</p>
           </div>

        </div>
        <div className={styles.row2}>
        <div className={styles.docbox}>
               <div className={styles.circle}>
                    <figure className={styles.figure}>
                        <Image
                            src={euf}
                            alt="apple"
                            layout="fill"
                            objectFit="contain"
                        />
                    </figure>
               </div>
               <h4 className={styles.h4}>Easy to use/User Friendly</h4>
               <p className={styles.p}>We work to offer you the best technology for all kinds of your healthcare needs.</p>
           </div>
        </div>
    </div>
  )
}

export default Wcare