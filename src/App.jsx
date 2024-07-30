import { useState } from 'react'
import './App.css'

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [Incrementor, setIncrementor]
    = useState(1);

  const handleScoreChange = () => {
    setCurrentScore(currentScore + Incrementor);
  }

  const handlePay10 = () => {
    if (currentScore >= 10) {
      setCurrentScore(currentScore - 10);
      setIncrementor(Incrementor + 1);
    } else if (currentScore < 10) {
      alert(`You can't afford that!`);
    }
  }

  const handlePlayAgain = () => {
    setCurrentScore(0);
    setIncrementor(1);
  }

  return (
    <div className="app">
      <h1>Clicker Game</h1>
      <p > Score : {currentScore} </p>

      {currentScore < 100 ? (
        <><button onClick={handleScoreChange}>{`+ ${Incrementor}`} </button>
          <button onClick={handlePay10}> Pay 10 Points to Change {Incrementor} to {Incrementor + 1}</button></>) : (<> <p> YOU WIN! </p><button onClick={handlePlayAgain}> Play Again </button> </>)}

    </div>

  )
}

export default App
