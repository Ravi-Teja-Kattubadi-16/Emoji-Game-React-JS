// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  render() {
    const {scoreValue, topScoreValue, displayValue} = this.props

    // console.log(scoreValue, topScoreValue)
    let topScore = ''
    let display = ''
    let wonGame = ''
    if (scoreValue === 12) {
      topScore = 12
      display = 'display-values'
    } else {
      topScore = topScoreValue
      wonGame = (
        <div className="total-score-container">
          <p className={`score ${displayValue} ${display}`}>
            Score: {scoreValue}
          </p>
          <p className={`score ${displayValue} ${display}`}>
            Top Score: {topScore}
          </p>
        </div>
      )
    }

    return (
      <div className="navbar-container">
        <div className="navbar-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="image-logo"
          />
          <h1 className="emoji-heading"> Emoji Game </h1>
        </div>
        {wonGame}
      </div>
    )
  }
}

export default NavBar
