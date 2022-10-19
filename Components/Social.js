import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import {FaInstagramSquare,FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {IoMdClose,IoLogoLinkedin} from 'react-icons/io'
import Link from "next/link";

function Social() {
    const [show ,setShow] = useState(false)
  return (
    <>
      <div className={styles.social} onClick={()=>{setShow(false)}}>
   {  show ? <p className={styles.stext}>Social Media</p>:
        
        <>
        {/* <div className={styles.close}  onClick={()=>{setShow(true)}}>
        <IoMdClose/>
        </div> */}
        <div className={styles.aligns}>
        <Link href="https://twitter.com/eCareDocta" smooth="true">
            <div className={styles.sbox}>
                <BsTwitter/>
                <p>Twitter</p>
            </div>
        </Link>
        <Link href="https://twitter.com/eCareDocta" smooth="true">
            <div className={styles.sbox}>
                <IoLogoLinkedin/>
                <p>LinkedIn</p>
            </div>
        </Link>        
        <Link href="https://www.facebook.com/profile.php?id=100086304606356" smooth="true">
            <div className={styles.sbox}>
                <FaFacebookF/>
                <p>Facebook</p>
            </div>
        </Link>
         <Link href="https://www.instagram.com/ecareDocta/" smooth="true">
            <div className={styles.sbox}>
                <FaInstagramSquare/>
                <p>Instagram</p>
            </div>
        </Link>
        </div>
        </>
   }
      </div>
      <div className={styles.socials}>
        <div className={styles.aligns}>
        <Link href="https://twitter.com/ecare_med" smooth="true">
            <div className={styles.sbox}>
                <BsTwitter/>
                <p>Twitter</p>
            </div>
        </Link>    
        <Link href="https://twitter.com/eCareDocta" smooth="true">
            <div className={styles.sbox}>
                <IoLogoLinkedin/>
                <p>LinkedIn</p>
            </div>
        </Link>    
        <Link href="https://www.facebook.com/profile.php?id=100086304606356" smooth="true">
            <div className={styles.sbox}>
                <FaFacebookF/>
                <p>Facebook</p>
            </div>
        </Link>
         <Link href="https://www.instagram.com/ecareDocta/" smooth="true">
            <div className={styles.sbox}>
                <FaInstagramSquare/>
                <p>Instagram</p>
            </div>
        </Link>
        </div>
      </div>
    </>
  )
}

export default Social