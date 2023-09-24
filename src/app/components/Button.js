import React from 'react';
import styles from './Button.module.css';

const Botao = ({ text }) => {
    return (
      <button className={styles.button}>
        {text}
      </button>
    );
  }