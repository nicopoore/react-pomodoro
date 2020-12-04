import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faSync, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faPause, faPlay, faSync, faArrowUp)

class TimerButtons extends Component {

  changeStatus = () => {
    this.props.dispatch({
      type: 'CHANGE_STATUS',
      running: !this.props.running
    })
  }

  resetTimer = () => {
    const sound = document.getElementById("beep")
    sound.pause()
    sound.currentTime = 0
    this.props.dispatch({
      type: 'RESET_TIMER'
    })
  }

  //const pause = () => <FontAwesomeIcon

  currentStatus = () => this.props.running ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />

  render() {
    return (
      <div id="TimerButtons">
        <button className="btn-one timer-btn" id="start_stop" onClick={this.changeStatus}>{this.currentStatus()}</button>
        <button className="btn-one timer-btn" id="reset" onClick={this.resetTimer}><FontAwesomeIcon icon={faSync} /></button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  running: state.running
})

export default connect(mapStateToProps)(TimerButtons)