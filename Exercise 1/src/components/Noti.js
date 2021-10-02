import React from 'react' 
import styles from './Noti.module.css';

export default function Noti (props) {
  return (
    <div className={ styles.container }>
      <span className={ styles.header }> { props.topic } </span> { props.body }
    </div>
  )
}
