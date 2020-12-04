import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

class IncDec extends Component {

  handleClick = (actionType, actionReceiver) => {
    if (!(
      (this.props[actionReceiver] <= 60000 && actionType === 'dec') || 
      (this.props[actionReceiver] >= 3600000 && actionType === 'inc'))
    ) {
      if (!this.props.running) {
        this.updateLength(actionType, actionReceiver)
      }
    }
  }

  updateLength = (actionType, actionReceiver) => {
    let newLength, nonActionReceiver, nonActionLength

    if (actionReceiver === 'sessionLength') {
      newLength = this.props.sessionLength
      nonActionReceiver = 'breakLength'
      nonActionLength = this.props.breakLength
    } else {
      newLength = this.props.breakLength
      nonActionReceiver = 'sessionLength'
      nonActionLength = this.props.sessionLength
    }

    newLength = actionType === 'inc' ? newLength + 60000 : newLength - 60000
    let newCurrentTimer = this.props.currentType.concat('Length') === actionReceiver ? newLength : this.props.currentTimer

    this.props.dispatch({
      type: 'UPDATE_LENGTH',
      [actionReceiver]: newLength,
      [nonActionReceiver]: nonActionLength,
      currentTimer: newCurrentTimer
    })
  }

  formatString = str => this.props.type.replace('Length', str)

  render() {
    return (
      <div id={this.formatString('-length-div')}>
        <h3 
          className="capitalize" 
          id={this.formatString('-label')}
        >
          {this.formatString(' Length')}
        </h3>

        <button
          className="btn-one" 
          id={this.formatString('-decrement')} 
          onClick={() => this.handleClick('dec', this.props.type)}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>

        <p id={this.formatString('-length')}>
          {this.props.type === 'sessionLength' ? this.props.sessionLength / 60000 : this.props.breakLength / 60000 }
        </p>
        
        <button
          className="btn-one" 
          id={this.formatString('-increment')} 
          onClick={() => this.handleClick('inc', this.props.type)}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  running: state.running,
  sessionLength: state.sessionLength,
  breakLength: state.breakLength,
  currentType: state.currentType,
  currentTimer: state.currentTimer
})

export default connect(mapStateToProps)(IncDec)