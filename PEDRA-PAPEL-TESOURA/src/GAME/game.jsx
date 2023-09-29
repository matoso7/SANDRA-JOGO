
import React from "react";
import './game.css';

function Game({ playGame }) {
  const options = ["pedra", "papel", "tesoura"];

  return (
    <div>
      <h2>SELECIONE SUA ALETERNATIVA:</h2>
      {options.map((option) => (
        <button key={option} id="bt-1" onClick={() => playGame(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Game;