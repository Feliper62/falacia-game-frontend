import Button from '../../../components/Button';
import Texto from '@/app/components/Texto';
import CaixaTexto from '../../../components/InputTexto';
import styles from '../../../styles/Button.module.css'
import styles2 from '../../../styles/Texto.module.css'


export const metadata = {
  title: 'Acessar Sala',
  description: 'Generated by create next app',
}

export default function AcessarSala() {
  return (
    <>
      <Texto className={styles2.titulo} text='ACESSAR SALA'/>

      {/* input Código da Sala */}
      <CaixaTexto text="Código da Sala" placeholder="Digite o código da sala" />

      {/* Input Apelido */}
      <CaixaTexto text="Apelido" placeholder="Digite seu apelido" />

      <Button className={styles.Button} text="Acessar Sala" href="host" id="tela_grupo" />
    </>
  );
}
