import React, { Component } from 'react'
import { connect } from "react-redux"
import { getTranslate } from 'react-localize-redux';
import './Rsvp.scss'

import { submitRSVP } from '../../actions/rsvpActions'

@connect((store) => {
  return {
    translate: getTranslate(store.local),
    rsvp: store.rsvp
  }
})
export default class Rsvp extends Component{

  constructor() {
    super()
    this.state = {
      fullname: '',
      email: '',
      rsvp: ''
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    const rsvp = {
      fullname: this.state.fullname,
      email: this.state.email,
      rsvp: this.state.rsvp
    }

    this.props.dispatch(submitRSVP(rsvp))
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render(){
    const { rsvp } = this.props
    let hearts = require('./hearts.svg')
    const translate = this.props.translate
    
    return(
      <section className="container rsvp">
        <a id="rsvp" />
        <h2>RSVP</h2>
        <form onSubmit={this.handleSubmit} className={(rsvp.submitting || rsvp.submitted) ? 'hide' : 'show'}>
          <label htmlFor="name">
            <input type="text" placeholder="Full Name" name="fullname" onChange={this.handleChange} value={this.state.fullname}  />
          </label>
          <label htmlFor="email">
            <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
          </label>
          <label htmlFor="attendance">
            {translate("rsvp.attend")}
            <select name="rsvp" onChange={this.handleChange} value={this.state.rsvp}>
              <option value="">--Select One---</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <input type="submit" value={translate("rsvp.submit")} />
        </form>
        <img src={hearts} alt="loading" className={(rsvp.submitting) ? 'show' : 'hide'} />
        <div className={`success ${(rsvp.submitted) ? 'show' : 'hide'}`}>
          Thank you for your rsvp
        </div>
      </section>
    )
  }
}