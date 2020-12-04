import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimeDisplay from './TimeDisplay'
import CircularProgress from '@material-ui/core/CircularProgress'


class Timer extends Component {

  componentDidMount() {
    setInterval(() => {
      this.updateTimer()
    }, 10);
  }

  updateTimer = () => {
    let newType = this.props.currentType === 'session' ? 'break' : 'session' 
    if (this.props.running && this.props.currentTimer > 0) {
      let newTimer = this.props.currentTimer - 10
      this.props.dispatch({
        type: 'UPDATE_TIMER',
        currentTimer: newTimer
      })
    } else if (this.props.running && this.props.currentTimer === 0) {
      this.props.dispatch({
        type: 'CHANGE_TYPE',
        currentType: newType,
        currentTimer: this.props.currentType === 'session' ? this.props.breakLength : this.props.sessionLength
      })
      this.playAudio()
    }
  }

  playAudio = () => {
    const sound = document.getElementById("beep")
    sound.currentTime = 0
    sound.play()
  }

  progressCircle = () => {
    let currentMaxValue = this.props.currentType === 'session' ? this.props.sessionLength : this.props.breakLength
    return (this.props.currentTimer / currentMaxValue) * 100
  }

  render() {
    return (
      <div id="Timer">
        <h2 className="capitalize" id="timer-label">{this.props.currentType}</h2>
        <div id="progress-radius">
          <CircularProgress key={this.props.currentTimer / 60000} className="circularProgress" variant="determinate" thickness={2} size={"7.9rem"} value={this.progressCircle()} />
          <h1 id="time-left">
            <TimeDisplay 
              time={this.props.currentTimer}
            />
          </h1>
        </div>
        <audio 
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          preload="auto"
          id="beep"
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentType: state.currentType,
  currentTimer: state.currentTimer,
  running: state.running,
  sessionLength: state.sessionLength,
  breakLength: state.breakLength
})

export default connect(mapStateToProps)(Timer)