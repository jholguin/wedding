export default function reducer(state={
    data: [],
    submitting: false,
    submitted: false,
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

    }

    return state
}