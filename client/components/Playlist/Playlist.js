import React, { Component } from 'react'
import { connect } from "react-redux"
import { getTranslate } from 'react-localize-redux';
import './Playlist.scss'

@connect((store) => {
  return {
    translate: getTranslate(store.local)
  }
})
export default class Rsvp extends Component{

  render(){
    
    const translate = this.props.translate

    return(
      <section className="container playlist">
        <a id="playlist" />
        <h2>{translate("playlist.title")}</h2>
        <p>These are some of the places we like to visit and feel that you should as well.</p>
        <div>
          <iframe src="https://snazzymaps.com/embed/6170" width="100%" height="300px"></iframe>
        </div>
      </section>
    )
  }
}