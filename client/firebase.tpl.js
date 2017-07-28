import firebase from 'firebase'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDCHoogEeevMkqfq6zabb497rvo4BkRD00",
  authDomain: "holguineverafter.firebaseapp.com",
  databaseURL: "https://holguineverafter.firebaseio.com",
  projectId: "holguineverafter",
  storageBucket: "",
  messagingSenderId: "701511703889"
};
firebase.initializeApp(config);
export default firebase;