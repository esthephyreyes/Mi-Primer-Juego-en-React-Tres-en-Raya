import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  // Actualizar marcador
  useEffect(() => {
    if (winner === "X") {
      setScoreX((prev) => prev + 1);
      setMensaje("¡Ganó X!");
    } else if (winner === "O") {
      setScoreO((prev) => prev + 1);
      setMensaje("¡Ganó O!");
    } else if (isDraw) {
      setMensaje("Empate");
    }
  }, [winner, isDraw]);

  // Verificar si alguien ganó 2 veces
  useEffect(() => {
    if (scoreX === 2) {
      setMensaje("Jugador X ganó la ronda. Nueva mano.");
      setTimeout(() => {
        resetRound();
      }, 2000);
    } else if (scoreO === 2) {
      setMensaje("Jugador O ganó la ronda. Nueva mano.");
      setTimeout(() => {
        resetRound();
      }, 2000);
    }
  }, [scoreX, scoreO]);

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setMensaje("");
  };

  const resetRound = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setScoreX(0);
    setScoreO(0);
    setMensaje("");
  };

  const statusColor = winner
    ? "black"
    : isDraw
    ? "gray"
    : xIsNext
    ? "red"
    : "blue";

  const status = winner
    ? `Ganó: ${winner}`
    : isDraw
    ? "Empate"
    : `Turno de: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="game">
      <h1 className="title">Tres en Raya 🇩🇴</h1>

      <div className="scoreboard">
        <div className="score x">Jugador X: {scoreX}</div>
        <div className="score o">Jugador O: {scoreO}</div>
      </div>

      <div className="status" style={{ color: statusColor }}>
        {status}
      </div>

      <div className="board">
        {squares.map((value, i) => (
          <button
            key={i}
            className={`square ${value === "X" ? "x" : value === "O" ? "o" : ""}`}
            onClick={() => handleClick(i)}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="buttons">
        <button className="reset" onClick={resetBoard}>
          Nueva Ronda
        </button>
        <button className="reset all" onClick={resetRound}>
          Reiniciar Todo
        </button>
      </div>

      {mensaje && <div className="mensaje-final">{mensaje}</div>}
    </div>
  );
}

// Función para verificar ganador
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default App;
