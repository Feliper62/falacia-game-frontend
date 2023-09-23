import Titulo from "./components/Titulo"

export default function Home() {
  return (
    <main>
      <Titulo/>
      <nav className="nav">
        <a href="/dashboard" id="DASHBOARD">DASHBOARD</a></nav>
    </main>
  )
}
