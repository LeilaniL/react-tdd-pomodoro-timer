import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      isOn: false
    };
  }

  startTimer() {
    console.log('timer START');
  }
  stopTimer() {
    console.log('timer STOPPED')
  }
  resetTimer() {
    console.log('timer RESET')
  }

  render = () => {
    return (<div className="timer-container" />)
  }
}

export default Timer;