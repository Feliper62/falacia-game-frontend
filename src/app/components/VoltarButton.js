import React from 'react';
import styles from '../styles/VoltarButton.module.css'; // Importe os estilos do CSS aqui

// O componente Button aceita props como text, href e id
const VoltarButton = ({ text, href, id }) => {
  return (
  <div className={styles.containerButton}>
        <a className={styles.voltarButton} href={href} id={id}>
      {text}
    </a>
    </div>
  );
};

export default VoltarButton;