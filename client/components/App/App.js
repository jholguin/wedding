import React, { Component } from 'react'
import './base.scss'

import Header from '../Header/Header'
import Home from '../Home/Home'
import Couple from '../Couple/Couple'
import OurStory from '../OurStory/OurStory'
import Venue from '../Venue/Venue'
import Registry from '../Registry/Registry'
import Rsvp from '../Rsvp/Rsvp'
import Playlist from '../Playlist/Playlist'



export default class App extends Component{

  render(){
    return(
      <section>
        <div>
          <a id="home" />
          <Header />
          <Home weddingDate="Feburary 24, 2018" />
          <Couple />
          <OurStory />
          <Venue />
          <Playlist />
          <Registry />
          <Rsvp />
          <footer>
            Developed by yours truely <a href="http://www.thinkjosh.com">&copy;Thinkjosh.com</a>
            <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          </footer>
        </div>
      </section>
    )
  }
}