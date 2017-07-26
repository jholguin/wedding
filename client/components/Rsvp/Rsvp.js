import React, { Component } from 'react'
import './Rsvp.scss'
import firebase from '../firebase.js'

export default class Rsvp extends Component{

  constructor() {
    super()

    this.state = {
      fullname: '',
      email: '',
      rsvp: '',
      submit: false,
      submitting: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    
    const rsvpRef = firebase.database().ref('rsvp')

    const rsvp = {
      fullname: this.state.fullname,
      email: this.state.email,
      rsvp: this.state.rsvp
    }
    
    this.setState({loading: true})

    rsvpRef.push(rsvp, () => {
      setTimeout(() => {
        this.setState({
          fullname: '',
          email: '',
          rsvp: '',
          submit: true,
          loading: false
        });
      }, 1500)
    });
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){

    let hearts = require('./hearts.svg')
    
    return(
      <section className="container rsvp">
        <h2>RSVP</h2>
        <form onSubmit={this.handleSubmit} className={(this.state.loading == true || this.state.submit == true) ? 'hide' : 'show'}>
          <label htmlFor="name">
            <input type="text" placeholder="Full Name" name="fullname" onChange={this.handleChange} value={this.state.fullname} />
          </label>
          <label htmlFor="email">
            <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
          </label>
          <label htmlFor="attendance">
            <select name="rsvp" onChange={this.handleChange} value={this.state.rsvp}>
              <option value="">--Select One---</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <img src={hearts} alt="loading" className={(this.state.loading == true) ? 'show' : 'hide'} />
        <div className={`success ${(this.state.submit == true) ? 'show' : 'hide'}`}>
          Thank you for your rsvp
        </div>
      </section>
    )
  }
}