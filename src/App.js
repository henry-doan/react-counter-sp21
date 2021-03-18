import { Component } from 'react';
import Clock from './Clock';
import Market from './Market';

class App extends Component {
  state = { showClock: false, showMarket: false }

  toggleClock = () => {
    const { showClock } = this.state 
    this.setState({ showClock: !showClock })
  }
  
  toggleMarket = () => {
    const { showMarket } = this.state 
    this.setState({ showMarket: !showMarket })
  }

  render() {
    const { showClock, showMarket } = this.state
    return (
      <>
        { showClock && <Clock /> }
        <button onClick={this.toggleClock}>
          Toggle Clock
        </button>
        { showMarket && <Market /> }
        <button onClick={this.toggleMarket}>
          Toggle Market
        </button>
      </>
    )
  }
}

export default App;
