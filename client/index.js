import React from 'react'
import ReactDOM from 'react-dom'

import './components/App/base.scss'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Couple from './components/Couple/Couple'
import OurStory from './components/OurStory/OurStory'
import Venue from './components/Venue/Venue'
import Registry from './components/Registry/Registry'
import Rsvp from './components/Rsvp/Rsvp'

ReactDOM.render(
	<div>
		<a id="home" />
		<Header />
		<Home weddingDate="Feburary 24, 2018" />
	    <Couple />
	    <OurStory />
	    <Venue />
	    <Registry />
	    <Rsvp />
	    <footer>
        Developed by yours truely <a href="http://www.thinkjosh.com">&copy;Thinkjosh.com</a>
      </footer>
	</div>
	,document.getElementById('app')
)