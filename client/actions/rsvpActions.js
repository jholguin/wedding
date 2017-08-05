import firebase from '../firebase.js'

const rsvpRef = firebase.database().ref('rsvp')

export function submitRSVP(rsvp) {
  return function(dispatch) {
    dispatch({type: "SUBMITTING_RSVP"});
    rsvpRef.push(rsvp, () => {
      setTimeout(() => {
        dispatch({type: "SUBMITTED_RSVP"});
      }, 1500)
    });
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