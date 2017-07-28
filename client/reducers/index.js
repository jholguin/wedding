import { combineReducers } from "redux"
import { localeReducer } from 'react-localize-redux';

import rsvp from "./rsvpReducer"

export default combineReducers({
  rsvp,
  local: localeReducer
})