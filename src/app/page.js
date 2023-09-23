import Titulo from "./components/Titulo"
import styles from './styles/Button.module.css'
export default function Home() {
  return (
    <>
      <Titulo/>
      <nav>
        <a className={styles.Button}href="/criar_sala" id="criar_sala">Criar Sala</a>
      </nav>
      <nav>
        <a className={styles.Button}href="/acessar_sala" id="acessar_sala">Acessar Sala</a>
      </nav>
      <nav>
        <a className={styles.Button}href="/como_jogar" id="como_jogar">Como Jogar</a>
      </nav>
      <nav>
        <a className={styles.Button}href="/creditos" id="creditos">Créditos</a>
      </nav>
      <nav>
        <a className={styles.Button}href="pages/dashboard" id="dashboard">PAGINA TESTE</a>
      </nav>
    </>
  )
}
