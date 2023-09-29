import React, { useState } from "react";
import Game from "./GAME/game";
import Scoreboard from "./Scoreboard/Scoreboard";
import "./App.css";

function App() {
  const [jogador, setJogador] = useState(0);
  const [computador, setComputador] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [pontuacao, setPontuacao] = useState({
    jogador: 0,
    computador: 0,
    empate: 0,
  });

  const choices = ["pedra", "papel", "tesoura"];

  const playGame = (choice) => {
    const opcaoComputador =
      choices[Math.floor(Math.random() * choices.length)];

    setJogador(choice);
    setComputador(opcaoComputador);

    if (choice === opcaoComputador) {
      setPontuacao({ ...pontuacao, empate: pontuacao.empate + 1 });
      setResultado("Empate!");
    } else if (
      (choice === "pedra" && opcaoComputador === "tesoura") ||
      (choice === "papel" && opcaoComputador === "pedra") ||
      (choice === "tesoura" && opcaoComputador === "papel")
    ) {
      setPontuacao({ ...pontuacao, jogador: pontuacao.jogador + 1 });
      setResultado("Você venceu!");
    } else {
      setPontuacao({ ...pontuacao, computador: pontuacao.computador + 1 });
      setResultado("O computador venceu!");
    }
  };

  const resetJogo = () => {
    setPontuacao({ jogador: 0, computador: 0, empate: 0 });
    setResultado(null);
  };

  return (
    <div className="App">
      <h1>Pedra - Papel - Tesoura</h1>
      <Game playGame={playGame} />
      <Scoreboard
        pontuacaoJogador={pontuacao.jogador}
        pontuacaoComputador={pontuacao.computador}
        empate={pontuacao.empate}
      />
      {resultado && (
        <div>
          <p>{resultado}</p>
          <button id="bt-2" onClick={resetJogo}>
            Inicar novamente
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
