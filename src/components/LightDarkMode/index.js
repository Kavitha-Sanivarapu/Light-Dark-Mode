// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const headingClassName = isDarkMode ? 'light-heading' : 'dark-heading'

    return (
      <div className={`container ${modeClassName}`}>
        <h1 className={headingClassName}>Click To Change Mode</h1>
        <button className="button" type="button" onClick={this.onClickMode}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
