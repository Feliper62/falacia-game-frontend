import styles from '../styles/TextoComum.module.css'

const TextoComum = ({ children}) => {
    return (
      <div className={styles.textoComum}>
        {children}
      </div>
    );
  };
  
  export default TextoComum;