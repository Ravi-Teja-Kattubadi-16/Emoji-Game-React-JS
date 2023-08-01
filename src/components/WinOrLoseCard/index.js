// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {scoreValue, restartGame} = props

  const onClickPlayAgainButton = () => {
    restartGame()
  }
  let winOrLoseResult
  if (scoreValue === 12) {
    winOrLoseResult = (
      <div className="align-container">
        <div className="won-game-container">
          <div className="score-details-container">
            <h1 className="you-won"> You Won </h1>
            <p className="best-score"> Best Score </p>
            <p className="result-score"> {scoreValue}/12 </p>
            <button
              type="button"
              className="play-again-button"
              onClick={onClickPlayAgainButton}
            >
              Play Again
            </button>
          </div>
          <div className="won-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="win or lose"
              className="won-image"
            />
          </div>
        </div>
      </div>
    )
  } else {
    winOrLoseResult = (
      <div className="align-container">
        <div className="loss-game-container">
          <div className="score-details-container">
            <h1 className="you-won">You Lose</h1>
            <p className="best-score"> Best Score </p>
            <p className="result-score"> {scoreValue}/12 </p>
            <button
              type="button"
              className="play-again-button"
              onClick={onClickPlayAgainButton}
            >
              Play Again
            </button>
          </div>
          <div className="won-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
              className="won-image"
            />
          </div>
        </div>
      </div>
    )
  }
  return <div>{winOrLoseResult}</div>
}

export default WinOrLoseCard
