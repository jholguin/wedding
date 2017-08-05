import React, { Component } from 'react'
import { connect } from "react-redux"
import './Admin.scss'

import { fetchRSVP } from '../../actions/rsvpActions'

@connect((store) => {
  return {
    rsvps: store.rsvp
  };
})
export default class Admin extends Component{

  componentWillMount(){
    this.props.dispatch(fetchRSVP())
  }

  render(){
    
    let responses = this.props.rsvps

    
    
    let test = Object.keys(responses.data).map((key) => {
        return (
          <div key={key} className="table-row">
            <span className="table-cell">{responses.data[key].fullname}</span>
            <span className="table-cell">{responses.data[key].email}</span>
            <span className="table-cell">{responses.data[key].rsvp}</span>
          </div>
        )
    })

    return(
      <section className="admin">
        <header>
          <h1 className="icon-octopus">HolguinEverAfter - Admin</h1>
        </header>
        <section className="dashboard">
        <div className="table">
          <div className="table-row header">
            <span className="table-cell">Name</span>
            <span className="table-cell">Email</span>
            <span className="table-cell">Response</span>
          </div>
          {test}
        </div>
        
        </section>
      </section>
    )
  }
}