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

  startTimer = () => {
    // TODO write tests with mock timer?
    // TODO prevent timer from going negative!
    if (this.state.isOn) return;
    const { minutes, seconds } = this.state;
    this.setState({ isOn: true })
    this.myInterval = setInterval(() => {
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }
  stopTimer = () => {
    clearInterval(this.myInterval);
    this.setState({ isOn: false });
  }
  resetTimer = () => {
    clearInterval(this.myInterval);
    this.setState({ isOn: false, minutes: 25, seconds: 0 })
  }

  render = () => {
    return (
      <div className="timer-container">
        <div className="time-display">
          {/* TODO fill out this div */}
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