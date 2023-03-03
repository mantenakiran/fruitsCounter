// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {count: 0, banana: 0}

  onIncrement = () => {
    console.log('click')
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    console.log('click')
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {count} = this.state
    const {banana} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="head">
            Bob ate <span className="span">{count}</span> mangoes{' '}
            <span className="span">{banana}</span> bananas
          </h1>

          <div className="con">
            <div className="mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />

              <button
                className="button"
                type="button"
                onClick={this.onDecrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
