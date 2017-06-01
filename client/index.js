import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Couple from './components/Couple/Couple'

ReactDOM.render(
	<div>
		<Header />
		<Home weddingDate="Feburary 24, 2018" />
    <Couple />
	</div>
	,document.getElementById('app')
)