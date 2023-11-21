import Texto from "@/app/components/Texto";
import styles from '../../../styles/Texto.module.css'
import stylesText from '../../../styles/CaixaDeTexto.module.css'
import CaixaDeTexto from "@/app/components/CaixaDeTexto";

export default function GrupoConvidado(){
    return (
    <>
      <Texto className={styles.titulo} text='falácia'></Texto>
      <CaixaDeTexto className={stylesText.caixaDeTextoEsquerda} text='Aguardando Jogadores...'/>
      <CaixaDeTexto className={stylesText.caixaDeTextoEsquerda} text='Aguardando Inicio da Partida pelo Host...'/>
      
    </>
    )
  }
  GrupoConvidado.getLayout = function getLayout(page) {
    return <inGameLayout>{page}</inGameLayout>; // Substitua 'RootLayout' pelo seu layout personalizado, se necessário
  };