import React, { useState } from "react";

function App() {
  // Hover nos botões
  const [hover, setHover] = useState(false)
  function hoverOn() {
    setHover(true)
  }
  function hoverOff() {
    setHover(false)
  }
  // Pega valor do nome
  const [nome, setNome] = useState("")
  function pegarNome(event) {
    setNome(event.target.value)
  }
  // fixa o valor de nome
  const [nomeCriado, setNomeCriado] = useState("")
  function fixaNome(event) {
    setNomeCriado(nome)
    event.preventDefault()
  }


  return (
    <div className="container">
      <form>
        <div className="itens">
          <h1> Hello {nomeCriado} </h1>
          <input
            onChange={pegarNome}
            placeholder="What's your name?"
            value={nome}
          ></input>

          <button
            onClick={fixaNome}
            style={{ backgroundColor: hover === true ? "#0BE016" : "black" }}
            onMouseOver={hoverOn}
            onMouseOut={hoverOff}
          >Register</button>
        </div>
      </form>
    </div>

  )
}
export default App;