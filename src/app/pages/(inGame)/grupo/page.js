import Texto from "@/app/components/Texto";
import styles from '../../../styles/Texto.module.css'

export default function GrupoConvidado(){
    return (
    <>
      <inGameLayout>
      <Texto className={styles.titulo} text='falácia'></Texto>
      <Texto className={styles.textoComum} text='<p>Você é o Convidado</p>'></Texto>
      </inGameLayout>
      
    </>
    )
  }
  GrupoConvidado.getLayout = function getLayout(page) {
    return <inGameLayout>{page}</inGameLayout>; // Substitua 'RootLayout' pelo seu layout personalizado, se necessário
  };