import React from 'react'
import styles from "./isLoading.module.css"

const LoadingUi = () => {
  return (
    <div className={styles.loading}>
      <span class={styles.loader}></span>
    </div>
  )
}

export default LoadingUi
