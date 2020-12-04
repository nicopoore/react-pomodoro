import React, { Component } from 'react'

export default class TimeDisplay extends Component {
  
  formatTime = (time) => {
    const format = t => Math.floor(t).toString().padStart(2, "0")
    let mm = format(time / 60000)
    let ss = format(time % 60000 / 1000)
    return `${mm}:${ss}`
  }

  render() {
    return (
      <div>
        {this.formatTime(this.props.time)}
      </div>
    )
  }
}