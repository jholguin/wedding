import React, { Component } from 'react'
import './Venue.scss'

export default class Venue extends Component{

  render(){

    const vinyardImage = require('./florence.jpg')

    return(
      <section className="container venue">
        <h2>Events</h2>
        <figure>
          <h3>The ceremony &amp; party</h3>
          <img src={vinyardImage} alt="Vinyards at Florence" />
          <figcaption>
            <ul>
              <li>The Vinyards at Florence</li>
              <li>8711 FM 487<br />Florence, TX 76527</li>
              <li>5pm - 11pm</li>
            </ul>
          </figcaption>
        </figure>
      </section>
    )
  }
}