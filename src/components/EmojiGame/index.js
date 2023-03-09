/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'

class EmojiGame extends Component {
  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojis = () => {
    const {emojisList} = this.props
    const shuffledEmojiList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-list">
        <li>
          {shuffledEmojiList.map(eachEmoji => (
            <img
              src={eachEmoji.emojiUrl}
              alt={eachEmoji.emojiName}
              className="emoji"
            />
          ))}
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div className="emojis-container">
        <button type="button" onClick={this.getShuffledEmojisList}>
          Refresh
        </button>
        <div>{this.renderEmojis()}</div>
      </div>
    )
  }
}

export default EmojiGame
