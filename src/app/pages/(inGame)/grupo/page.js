import Texto from "@/app/components/Texto";
import styles from '../../../styles/Texto.module.css'

export default function Grupo(){
    return (
    <>
      <inGameLayout>
      <Texto className={styles.titulo} text='falácia'></Texto>
      </inGameLayout>
      
    </>
    )
  }
  Grupo.getLayout = function getLayout(page) {
    return <inGameLayout>{page}</inGameLayout>; // Substitua 'RootLayout' pelo seu layout personalizado, se necessário
  };