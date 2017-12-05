import firebase from '../firebase.js'

import axios from 'axios'
const rsvpRef = firebase.database().ref('rsvp')
const MESSAGE_URL = 'https://holguineverafter.herokuapp.com'

export function submitRSVP(rsvp) {
  return function(dispatch) {
    dispatch({type: "SUBMITTING_RSVP"});
    rsvpRef.push(rsvp, () => {
      setTimeout(() => {
        dispatch({type: "SUBMITTED_RSVP"})
        sendRsvpMessage(rsvp)
      }, 1500)
    })
  }
}

export function fetchRSVP(){
  return function(dispatch) {
    dispatch({type: "FETCH_RSVP"});
    rsvpRef.on('value', (snapshot) => {
      dispatch({type: "FETCH_RSVP_FULFILLED", payload: snapshot.val() })
    })
  }
}

function sendRsvpMessage(rsvp){
    axios.post(MESSAGE_URL + '/sendMessage', {
        guestName: rsvp.fullname
    }).then((response) => {
        console.log(response)
    })
}