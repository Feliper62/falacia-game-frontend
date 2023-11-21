import Texto from '@/app/components/Texto'
import styles from '../../styles/Texto.module.css'
import Button from "../../components/Button"
import buttonStyle from '../../styles/Button.module.css'
import stylesText from '../../styles/CaixaDeTexto.module.css'
import CaixaDeTexto from '@/app/components/CaixaDeTexto'

export default function inGameLayout({ children }) {
    return (
      <>
       
       {children}
      
      <Button className={buttonStyle.voltarButton}  text="Voltar" href="/" id="voltar" />     
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Jogador 1'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Espaço Vazio'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Espaço Vazio'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Espaço Vazio'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Espaço Vazio'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Espaço Vazio'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Espaço Vazio'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Espaço Vazio'/>
  
      </>
        
    )
        
    
  }