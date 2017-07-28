import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { setLanguages, addTranslation } from 'react-localize-redux';

import './components/App/base.scss'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Couple from './components/Couple/Couple'
import OurStory from './components/OurStory/OurStory'
import Venue from './components/Venue/Venue'
import Registry from './components/Registry/Registry'
import Rsvp from './components/Rsvp/Rsvp'
import Playlist from './components/Playlist/Playlist'

import { fetchUser } from "./actions/rsvpActions"
import store from "./store"

const languages = ['en', 'pt'];
store.dispatch(setLanguages(languages));

const pageTranslations = require('./global.locale.json')
store.dispatch(addTranslation(pageTranslations));

ReactDOM.render(
    <Provider store={store}>
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
            </footer>
    	</div>
    </Provider>
	,document.getElementById('app')
)