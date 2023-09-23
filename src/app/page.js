import Titulo from "./components/Titulo"

export default function Home() {
  return (
    <main>
      <Titulo/>
      <nav>
        <a href="/criar_sala" id="criar_sala">Criar Sala</a>
      </nav>
      <nav>
        <a href="/acessar_sala" id="acessar_sala">Acessar Sala</a>
      </nav>
      <nav>
        <a href="/como_jogar" id="como_jogar">Como Jogar</a>
      </nav>
      <nav>
        <a href="/creditos" id="creditos">Créditos</a>
      </nav>
      <nav>
        <a href="pages/dashboard" id="dashboard">PAGINA TESTE</a>
      </nav>
    </main>
  )
}
