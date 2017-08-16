import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import { setLanguages, addTranslation, setActiveLanguage } from 'react-localize-redux';
import store from "./store"
import App from './components/App/App'
import Admin from './components/Admin/Admin'


const languages = ['en', 'pt'];
store.dispatch(setLanguages(languages));

const pageTranslations = require('./global.locale.json')
store.dispatch(addTranslation(pageTranslations));

const mapsURL = 'https://maps.googleapis.com/maps/api/geocode/json'

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition((pos) => {
    let { latitude, longitude } = pos.coords
    axios.get(mapsURL, {
      params:{
        latlng: `${latitude},${longitude}`,
        key: 'AIzaSyAMK5ogq2OPR6epGFUfNg0Yqd78TSI_cpY'
      }
    }).then((res) => {
      let data = res.data.results
      let newdata = data.filter((elem, index) => {
        return elem.types[0] == "country"
      })[0]

      if(newdata.address_components[0]["short_name"]){
        let country = newdata.address_components[0]["short_name"].toLowerCase()
        store.dispatch(setActiveLanguage((country == "pt") ? country : 'en'))
      }
    })
  })
}

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