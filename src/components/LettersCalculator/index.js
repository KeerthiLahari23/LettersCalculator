// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}
  onChangeInput = event => {
    const reqVal = event.target.value
    this.setState({inputPhrase: reqVal})
  }
  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="calculate-container">
          <h1 className="heading">Calculate The Letters You Enter</h1>
          <div className="input-container">
            <label className="enter-phrase" htmlFor="inputPhrase">
              Enter The Phrase
            </label>
            <input
              className="enter-phrase-input"
              placeholder="Enter The Phrase"
              onChange={this.onChangeInput}
              type="text"
              value={inputPhrase}
              id="inputPhrase"
            />
          </div>
          <button className="no-of-letters-btn">
            <p className="no-of-letters">No.of letters: {inputPhrase.length}</p>
          </button>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
