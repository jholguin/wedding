import React, { Component } from 'react'
import './Rsvp.scss'

export default class Rsvp extends Component{

  render(){
    

    return(
      <section className="container rsvp">
      <h2>RSVP</h2>
        <form>
          <label htmlFor="name">
            <input type="text" placeholder="Full Name" />
          </label>
          <label htmlFor="email">
            <input type="text" placeholder="Email" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    )
  }
}