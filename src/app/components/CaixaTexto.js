import React from 'react';
import styles from '../styles/CaixaTexto.module.css'; // Importe os estilos do CSS aqui
import styles2 from '../styles/Texto.module.css'

const Input = ({text, placeholder}) => {
  return (
    <div className={styles.Input}>
      <label className={styles2.textoComum}>{text}</label>
      <input className={styles.input }type="text" placeholder= {placeholder} />
    </div>
  );
};

export default Input;