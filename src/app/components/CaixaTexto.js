import React from 'react';
import styles from '../styles/CaixaTexto.module.css'; 
import styles2 from '../styles/TextoComum.module.css'

const Input = ({text, placeholder}) => {
  return (
    <div className={styles.Input}>
      <label className={styles2.textoComum}>{text}</label>
      <input className={styles.input }type="text" placeholder= {placeholder} />
    </div>
  );
};

export default Input;