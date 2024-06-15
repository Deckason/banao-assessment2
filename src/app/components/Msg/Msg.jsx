import React from 'react'
import styles from "./Msg.module.css"

const ErrMsg = ({message, color}) => {
  return (
    <div className={styles.container}>
      <h3 style={{color: color}}>{message}</h3>
    </div>
  )
}

export default ErrMsg
