import React from 'react';
import styles from '../styles/InputTexto.module.css'; // Importe os estilos do CSS aqui
import styles2 from '../styles/Texto.module.css'
// const CaixaTexto = ({ label, placeholder }) => {
//   return (
//     <div className={styles.CaixaTexto}>
//       <label className={styles.Label}>Apelido:</label>
//       <div className={styles.InputContainer}>
//         <input
//           className={styles.Input}
//           type="text"
//           placeholder="Digite seu apelido aqui!"
//         />
//       </div>
//     </div>
//   );
// };

// export default CaixaTexto;

const InputTexto = ({text, placeholder}) => {
  return (
    <div className={styles.Input}>
      <label className={styles2.textoComum}>{text}</label>
      <input className={styles.input }type="text" placeholder= {placeholder} />
    </div>
  );
};

export default InputTexto;