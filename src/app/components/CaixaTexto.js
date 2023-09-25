import React from 'react';
import styles from '../styles/CaixaTexto.module.css'; // Importe os estilos do CSS aqui

const CaixaTexto = ({ label, placeholder }) => {
  return (
    <div className={styles.CaixaTexto}>
      <label className={styles.Label}>Apelido:</label>
      <div className={styles.InputContainer}>
        <input
          className={styles.Input}
          type="text"
          placeholder="Digite seu apelido aqui!"
        />
      </div>
    </div>
  );
};

export default CaixaTexto;