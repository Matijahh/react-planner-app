import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCw0_7XOhQDWtLnYUrdGRdUagjUtr1riis",
  authDomain: "planner-app-207c8.firebaseapp.com",
  databaseURL: "https://planner-app-207c8.firebaseio.com",
  projectId: "planner-app-207c8",
  storageBucket: "planner-app-207c8.appspot.com",
  messagingSenderId: "762072388123",
  appId: "1:762072388123:web:e66e64c46db1de9edc1ebe",
  measurementId: "G-1RQ469SK80",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
