import Titulo from "./components/Titulo"
import styles2 from './styles/Button.module.css'



export default function Home() {
  return (
    <>
      <header><Titulo/></header>
      
        <div>
        <nav>
        <a className={styles2.Button}href="/criar_sala" id="criar_sala">Criar Sala</a>
      </nav>
      <nav>
        <a className={styles2.Button}href="/acessar_sala" id="acessar_sala">Acessar Sala</a>
      </nav>
      <nav>
        <a className={styles2.Button}href="/como_jogar" id="como_jogar">Como Jogar</a>
      </nav>
      <nav>
        <a className={styles2.Button}href="/creditos" id="creditos">Créditos</a>
      </nav>
      <nav>
        <a className={styles2.Button}href="pages/dashboard" id="dashboard">PAGINA TESTE</a>
      </nav>
      </div>
      
      
    </>
  )
}
