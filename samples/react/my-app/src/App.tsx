import './App.css'

function App() {
  return (
    <>
      <section id="center">
        {/* <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div> */}
        <div className="hero">
          <img src={"https://panificacao.dispandovale.com.br/imagens/distribuidor-de-manteiga-para-padaria-telefone.jpg"} className="base" width="170" height="179" alt="" />
        </div>
        
        <div>
          <h1>Padaria do José</h1>
        </div>
        <button
          className="counter"
          onClick={() => alert("Bem vindo e volte logo! Cheiro! ;* ")}
        >
          Clique aqui para entrar no site
        </button>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
