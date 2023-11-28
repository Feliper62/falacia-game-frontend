import styles from '../../../../styles/Texto.module.css'
import buttonStyle from '@/app/styles/Button.module.css'
import Texto from '@/app/components/Texto'
import Button from '@/app/components/Button'
import TesteJogadores from './listaJogadores/page'

export default function menuTesteBackEnd(){
    return (
    <>
      <Texto className={styles.titulo} text='escolha sua pagina'></Texto>
      <Button className={buttonStyle.voltarButton}  text="Voltar" href="/" id="voltar" />
      <Button className={buttonStyle.Button} text='Lista de Jogadores' href='menuTeste/listaJogadores' id='testeJogadores'/>
      <Button className={buttonStyle.Button} text='Teste de Input' href='menuTeste/inputTeste' id='inputTeste'/>
      
    </>
    )
  };