import Texto from "@/app/components/Texto";
import styles from '../../../styles/Texto.module.css'
import stylesText from '../../../styles/CaixaDeTexto.module.css'
import CaixaDeTexto from "@/app/components/CaixaDeTexto";
import Button from "@/app/components/Button";
import buttonStyle from '../../../styles/Button.module.css'


export default function GrupoConvidado(){
    return (
    <>
      <Button className={buttonStyle.voltarButton}  text="Voltar" href="acessar_sala" id="voltar" />
      <Texto className={styles.titulo} text='falácia'></Texto>
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