import { Component } from 'react';

class Clock extends Component {
  state = { date: new Date() }

  componentDidMount() {
    this.ticker = setInterval( () => this.tick(), 1000 )
  }

  tick = () => {
    this.setState({ date: new Date() })
  }

  componentWillUnmount() {
    clearInterval(this.ticker)
  }

  render() {
    const { date } = this.state
    return (
      <p>
        { date.toLocaleTimeString() }
      </p>
    )
  }
}

export default Clock;