import React from 'react'
import ReactDOM from 'react-dom'

import './components/App/base.scss'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Couple from './components/Couple/Couple'
import OurStory from './components/OurStory/OurStory'
import Venue from './components/Venue/Venue'

ReactDOM.render(
	<div>
		<Header />
		<Home weddingDate="Feburary 24, 2018" />
    <Couple />
    <OurStory />
    <Venue />
	</div>
	,document.getElementById('app')
)