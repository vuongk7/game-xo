import React from 'react'
import styles from './square.module.css'

const Square = ({value,handlePlay, index}) => {
    return <button className={styles.square} onClick={handlePlay}>{value}</button>
}

export default Square