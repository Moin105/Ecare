import React,{useState} from 'react'
import styles from '../styles/Home.module.css'

function Footer() {
    const [inputs, setInputs] = useState({
        email: "",
      });
  return (
    <div className={styles.footer}>
        <div className={styles.ufooter}>
              <div className={styles.newsletter}> 
              <h4 className={styles.h4}>Join our Newsletter!</h4>
              <p className={styles.p}>Take healthcare in your hands with our automated healthcare system. Subscribe to
our newsletter today!</p>
              <div className={styles.ebox}>
              <input
                type='text'
                name='email'
                id='email'
                className={styles.input}
                placeholder='Email here'
                value={inputs.name}
                />
                <button className={styles.button}>Send</button>
              </div>
              </div>
              <ul className={styles.list}>
                <li className={styles.li}>About Us</li>
                <li className={styles.li}>Android App</li>
                <li className={styles.li}>iOS App</li>
                <li className={styles.li}>How it works?</li>
                <li className={styles.li}>Features</li>
                <li className={styles.li}>Why us?</li>
              </ul>
              <ul className={styles.list2}>
                <li className={styles.li}>Facebook</li>
                <li className={styles.li}>Twitter</li>
                <li className={styles.li}>Instagram</li>
                <li className={styles.li}>LinkedIn</li>
              </ul>
        </div>
        <div className={styles.bfooter}>Copyright @ 2021 all rights reserved eCare</div>
    </div>
  )
}

export default Footer