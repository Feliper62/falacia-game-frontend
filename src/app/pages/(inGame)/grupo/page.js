import Texto from "@/app/components/Texto";
import styles from '../../../styles/Texto.module.css'
import stylesText from '../../../styles/CaixaDeTexto.module.css'
import CaixaDeTexto from "@/app/components/CaixaDeTexto";
import buttonStyle from '../../../styles/Button.module.css'
import IconButton from '../../../components/IconButton'
import { FiHelpCircle } from "react-icons/fi";
import { IoCaretBack } from "react-icons/io5";

export default function GrupoConvidado(){
    return (
    <>
<<<<<<< HEAD
=======
      <Button className={buttonStyle.voltarButton}  text="Voltar" href="acessar_sala" id="voltar" />
>>>>>>> d09fdb970f2e10465a89b805007b52f9544ed7ed
      <Texto className={styles.titulo} text='falácia'></Texto>
      <IconButton className={buttonStyle.voltarButton}  text="Voltar" href="/" id="voltar" icon={<IoCaretBack className={buttonStyle.icon} />} />
      <IconButton className={buttonStyle.ajudaButton}  text="Ajuda" href="/" id="ajuda" icon={<FiHelpCircle className={buttonStyle.icon} />} />
      <div className={stylesText.container}>
      <div> 
      <CaixaDeTexto className={stylesText.caixaDeTextoEsquerda} text='Aguardando Jogadores...'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoEsquerda} text='Aguardando Inicio da Partida pelo Host...'/>
      </div>
      <div>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Jogador 1'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Aguardando Jogadores'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Aguardando Jogadores'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Aguardando Jogadores'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Aguardando Jogadores'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Aguardando Jogadores'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Aguardando Jogadores'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoDireita} text='Aguardando Jogadores'/>
      </div>
      </div>
    </>
    )
};