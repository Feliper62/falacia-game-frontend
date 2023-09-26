import Button from "../../components/Button";
import styles from '../../styles/Button.module.css';

export default function OtherLayout({ children }) {
    return (
      <>
        <Button className={styles.voltarButton}  text="Voltar" href="/" id="voltar" />
        
        {children}
         
          
          
      </>
        
    )
        
    
  }