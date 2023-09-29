import React from "react";
import './Scoreboard.css';

function Scoreboard({ pontuacaoJogador, pontuacaoComputador, empate }) {
  return (
    <div className="scoreboard">
      <h2>PLACAR DO JOGO</h2>
      <div className="score">
        <div className="score-item">
          <span className="score-label">Jogador:</span>
          <span className="score-value">{pontuacaoJogador}</span>
        </div>
        <div className="score-item">
          <span className="score-label">Computador:</span>
          <span className="score-value">{pontuacaoComputador}</span>
        </div>
        <div className="score-item">
          <span className="score-label">Empates:</span>
          <span className="score-value">{empate}</span>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;