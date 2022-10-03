import React from "react";
import styles from '../styles/Home.module.css'

function modal(props) {
  return (
    <div className={styles.overlays}>

      <div className={styles.modals}>{props.message}</div>
    </div>
  );
}

export default modal;