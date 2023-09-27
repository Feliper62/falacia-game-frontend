import React from 'react';
import styles from '../styles/InputTexto.module.css'; // Importe os estilos do CSS aqui
import styles2 from '../styles/Texto.module.css'

const InputTexto = ({text, placeholder}) => {
  return (
    <div className={styles.Input}>
      <label className={styles2.textoComum}>{text}</label>
      <input className={styles.input }type="text" placeholder= {placeholder} />
    </div>
  );
};

export default InputTexto;