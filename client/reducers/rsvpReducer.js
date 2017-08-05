export default function reducer(state={
    data: [],
    submitting: false,
    submitted: false,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      
      case "SUBMITTING_RSVP": {
        return {...state, submitting: true}
      }

      case "SUBMITTED_RSVP":{
        return {
          ...state,
          submitted: true,
          submitting: false
        }
      }

      case "FETCH_RSVP":{
        return {
          ...state,
          fetching: true
        }
      }

      case "FETCH_RSVP_FULFILLED":{
        return {
          ...state,
          fetching: false,
          fetched: true,
          data: action.payload
        }
      }

    }

    return state
}