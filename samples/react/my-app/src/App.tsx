import { useEffect, useState } from "react";
import Bird from "./components/Bird"
import Pipe from "./components/Pipe"

export default function App() {
  const GAME_HEIGHT = 400;
  const GAME_WIDTH = 300;

  const PIPE_WIDTH = 60;
  const GAP = 130;

  const [birdY, setBirdY] = useState(200);
  const [velocity, setVelocity] = useState(0);

  const [pipeX, setPipeX] = useState(300);
  const [pipeGapY, setPipeGapY] = useState(150);

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // gravidade
  useEffect(() => {
    const gravity = setInterval(() => {
      setVelocity((v) => v + 0.5);
      setBirdY((y) => y + velocity);
    }, 30);

    return () => clearInterval(gravity);
  }, [velocity]);

  useEffect(() => {
  function handleKey(event: KeyboardEvent) {
    if (event.code === "Space") {
      jump()
    }
  }

  window.addEventListener("keydown", handleKey)

  return () => {
    window.removeEventListener("keydown", handleKey)
  }
}, [gameOver])

  // mover canos
  useEffect(() => {
    const pipes = setInterval(() => {
      setPipeX((x) => {
        if (x < -PIPE_WIDTH) {
          setScore((s) => s + 1);
          setPipeGapY(Math.random() * 200 + 50);
          return GAME_WIDTH;
        }
        return x - 3;
      });
    }, 30);

    return () => clearInterval(pipes);
  }, []);

  // colisão
  useEffect(() => {
    const birdTop = birdY;
    const birdBottom = birdY + 30;

    const pipeTop = pipeGapY;
    const pipeBottom = pipeGapY + GAP;

    const hitPipe =
      pipeX < 120 &&
      pipeX + PIPE_WIDTH > 80 &&
      (birdTop < pipeTop || birdBottom > pipeBottom);

    const hitGround = birdY > GAME_HEIGHT || birdY < 0;

    if (hitPipe || hitGround) {
      setGameOver(true);
    }
  }, [birdY, pipeX]);

  // pulo
  function jump() {
    if (!gameOver) {
      setVelocity(-8);
    }
  }
function restart() {
  setBirdY(200)
  setVelocity(0)
  setPipeX(GAME_WIDTH)
  setPipeGapY(150)
  setScore(0)
  setGameOver(false)
}
  return (
    <div
      onClick={jump}
      style={{
        width: GAME_WIDTH,
        height: GAME_HEIGHT,
        border: "2px solid black",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* pássaro */}
      <Bird y={birdY} />

      {/* canos */}
      <Pipe x={pipeX} gapY={pipeGapY} />

      {/* score */}
      <div style={{ position: "absolute", top: 10, left: 10 }}>
        Score: {score}
      </div>

      {gameOver && (
  <div
    style={{
      position: "absolute",
      top: "40%",
      left: "25%",
      textAlign: "center",
      fontSize: 24,
    }}
  >
    <div>Game Over</div>

    <button
      onClick={restart}
      style={{
        marginTop: 10,
        padding: "5px 10px",
        fontSize: 16,
        cursor: "pointer",
      }}
    >
      Restart
    </button>
  </div>
)}
    </div>
  );
}