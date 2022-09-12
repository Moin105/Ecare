import React from "react";
import styles from '../styles/Home.module.css'
import logo from '../public/logo.png'
import {MdArrowForwardIos} from 'react-icons/md'

// import styles from '../styles/Home.module.css'
// import logo from "../public/logo.png";
import Image from "next/image";
// import toggle from "../public/dropdown.png";
import Link from "next/link";
function Nav(props) {
  const navHandle = () => {
    props.setNav(false);
  };
  return (
    <div className={styles.mobilenav}>
      {" "}
      <div className={styles.mobileback}>
        <div onClick={navHandle}  className={styles.arrow}>
          {" "}<MdArrowForwardIos/>
          {/* <figure>
            <Image
              src={logo}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure> */}
        </div>
      </div>
      <div className={styles.mobilebar}>
        <figure className={styles.hlogo}>
          <Image
            src={logo}
            alt="OBS TECHNOLOGIA"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <ul className={styles.uppernav}>
          <li onClick={navHandle}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={navHandle}>
            <Link href="/portfolio">About</Link>
          </li>
          <li onClick={navHandle}>
            <Link href="/#services">How it works </Link>
          </li>
          <li onClick={navHandle}>
            <Link href="/#contact">Why us</Link>
          </li>
          <li onClick={navHandle}>
            <Link href="/#contact">Contact us</Link>
          </li>
          <li onClick={navHandle}>
            {" "}
            <Link href="/#about">Language</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;