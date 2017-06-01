import React, { Component } from 'react'
import './Home.scss'

export default class Header extends Component{

  constructor(props){
    super(props);
    this._weddingDate = new Date(props.weddingDate).getTime()
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  countDown(){
    let _currDate = new Date().getTime();
    let _diff = this._weddingDate - _currDate;

    this.setState({
      days: Math.floor(_diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((_diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((_diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((_diff % (1000 * 60)) / 1000)
    })
  }

  componentDidMount() {
    this.intervalId = setInterval(this.countDown.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render(){
    return(
      <section className="container headline">
        <h1>Christina &amp; Josh</h1>
        <h2>{this.props.weddingDate}</h2>
        <div className="counter">
          <div className="days">
            {this.state.days}
            <span>Days</span>
          </div>
          <div className="hours">
            {this.state.hours}
            <span>Hours</span>
          </div>
          <div className="minutes">
            {this.state.minutes}
            <span>Minutes</span>
          </div>
          <div className="seconds">
            {this.state.seconds}
            <span>Seconds</span>
          </div>
        </div>
      </section>
    )
  }
}