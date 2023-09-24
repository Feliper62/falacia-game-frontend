import Button from "../components/Button";
import VoltarButtonButton from "../components/VoltarButton";
import styles from '../styles/VoltarButton.module.css';


export default function OtherLayout({ children }) {
    return (
      <>
        <VoltarButtonButton  text="Voltar" href="/" id="voltar" />
        
        {children}
         
          
          
      </>
        
    )
        
    
  }