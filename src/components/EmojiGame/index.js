import {Component} from 'react'

import NavBar from '../NavBar'

import './index.css'

import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    uniqueEmojisListCount: '',
    repeatedIds: [],
    result: '',
    displayValue: '',
  }

  restartGame = () => {
    const {score, topScore} = this.state

    if (score === 12) {
      this.setState({
        score: 0,
        uniqueEmojisListCount: '',
        repeatedIds: [],
        result: '',
        displayValue: '',
        topScore: 12,
      })
    } else if (score > topScore) {
      this.setState({topScore: score})
    } else {
      this.setState({
        score: 0,
        uniqueEmojisListCount: '',
        repeatedIds: [],
        result: '',
        displayValue: '',
      })
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  addEmojiToClickedEmojisList = id => {
    // let Result
    this.shuffledEmojisList()
    const {emojisList} = this.props
    const {uniqueEmojisListCount} = this.state

    const emojiDetails = emojisList.filter(eachEmoji => eachEmoji.id === id)

    if (uniqueEmojisListCount.length === 0) {
      this.setState(prevState => ({
        uniqueEmojisListCount: [
          ...prevState.uniqueEmojisListCount,
          emojiDetails[0],
        ],
        score: prevState.score + 1,
        repeatedIds: [...prevState.repeatedIds, id],
        // currentEmojiId: id,
      }))
    } else {
      const existedEmojiOrNot = uniqueEmojisListCount.filter(
        eachEmojiDetails => eachEmojiDetails.id === id,
      )
      if (existedEmojiOrNot.length === 0) {
        this.setState(prevState => ({
          uniqueEmojisListCount: [
            ...prevState.uniqueEmojisListCount,
            emojiDetails[0],
          ],
          score: prevState.score + 1,
          repeatedIds: [...prevState.repeatedIds, id],
          //   currentEmojiId: id,
        }))
      } else {
        const {score, topScore} = this.state
        if (score === parseInt(12)) {
          this.setState({
            score: 12,
            topScore: 12,

            result: (
              <WinOrLoseCard
                scoreValue={score}
                topScoreValue={topScore}
                restartGame={this.restartGame}
              />
            ),
            displayValue: 'display-values',
          })
        }
        if (score > topScore) {
          this.setState(prevState => ({
            topScore: prevState.score,
            result: (
              <WinOrLoseCard
                scoreValue={score}
                topScoreValue={topScore}
                restartGame={this.restartGame}
              />
            ),
            displayValue: 'display-values',
          }))
        } else {
          this.setState({
            result: (
              <WinOrLoseCard
                scoreValue={score}
                topScoreValue={topScore}
                restartGame={this.restartGame}
              />
            ),
            displayValue: 'display-values',
          })
        }
      }
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, result, displayValue} = this.state

    let Result
    if (score === 12) {
      Result = (
        <WinOrLoseCard
          scoreValue={score}
          topScoreValue={topScore}
          restartGame={this.restartGame}
        />
      )
    } else if (result === '') {
      Result = (
        <ul className="unordered-list-container">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              eachEmoji={eachEmoji}
              addEmojiToClickedEmojisList={this.addEmojiToClickedEmojisList}
            />
          ))}
        </ul>
      )
    } else if (result !== '') {
      Result = result
    }

    return (
      <div className="app-container">
        <NavBar
          scoreValue={score}
          topScoreValue={topScore}
          displayValue={displayValue}
        />
        <div className="emoji-container">{Result}</div>
      </div>
    )
  }
}

export default EmojiGame
