import styles from '../styles/Titulo.module.css'

/*export default function Titulo() {
    return (
        
    <> 
        <p className={styles.titulo}>FALÁCIA</p>            
    </>
           
    )
}*/

const Titulo = ({ text}) => {
    return (
      <p className={styles.titulo}>
        {text}
      </p>
    );
  };
  
  export default Titulo;
