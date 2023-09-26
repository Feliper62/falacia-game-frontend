import styles from '../styles/Titulo.module.css'

const Titulo = ({ text}) => {
    return (
      <p className={styles.titulo}>
        {text}
      </p>
    );
  };
  
  export default Titulo;
