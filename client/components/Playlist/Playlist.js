import React, { Component } from 'react'
import './Playlist.scss'

export default class Rsvp extends Component{

  render(){

    return(
      <section className="container playlist">
        <a id="playlist" />
        <h2>Christina + Josh's ATX Playlist</h2>
        <p>These are some of the places we like to visit and feel that you should as well.</p>
        <div>
          <iframe src="https://snazzymaps.com/embed/6170" width="100%" height="300px"></iframe>
        </div>
      </section>
    )
  }
}