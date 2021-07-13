import React, { Component } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

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
    return (
      <div className="timer-container">
        <div className="time-display">
          // TODO fill out this div
        </div>
        <div className="timer-button-container">
          <TimerButton className="start-timer" buttonAction={this.startTimer} buttonValue={'Start'} />
          <TimerButton className="stop-timer" buttonAction={this.stopTimer} buttonValue={'Stop'} />
          <TimerButton className="reset-timer" buttonAction={this.resetTimer} buttonValue={'Reset'} />
        </div>
      </div>)
  }
}

export default Timer;