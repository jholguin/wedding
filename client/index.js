import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import { setLanguages, addTranslation } from 'react-localize-redux';
import store from "./store"
import App from './components/App/App'
import Admin from './components/Admin/Admin'

const languages = ['en', 'pt'];
store.dispatch(setLanguages(languages));

const pageTranslations = require('./global.locale.json')
store.dispatch(addTranslation(pageTranslations));



ReactDOM.render(
    <Provider store={store}>
    	<HashRouter basename="/">
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/admin" component={Admin} />
            </div>
        </HashRouter>
    </Provider>
	,document.getElementById('app')
)