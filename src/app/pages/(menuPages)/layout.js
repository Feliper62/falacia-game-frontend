import Button from "../../components/Button";
import VoltarButton from "../../components/VoltarButton"
import styles from '../../styles/VoltarButton.module.css';


export default function OtherLayout({ children }) {
    return (
      <>
        <VoltarButton  text="Voltar" href="/" id="voltar" />
        
        {children}
         
          
          
      </>
        
    )
        
    
  }