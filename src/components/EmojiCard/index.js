// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, addEmojiToClickedEmojisList} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onClickEmojiContainer = () => {
    addEmojiToClickedEmojisList(id)
  }

  return (
    <li className="list-item-container" onClick={onClickEmojiContainer}>
      <button type="button" className="emoji-button">
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
