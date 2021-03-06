// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRPXmDnZ721y9eWJilwPTbG8rbk-StOOY",
  authDomain: "esoft-chat-app-d63c6.firebaseapp.com",
  projectId: "esoft-chat-app-d63c6",
  storageBucket: "esoft-chat-app-d63c6.appspot.com",
  messagingSenderId: "596937879971",
  appId: "1:596937879971:web:b8443fdd0cee072ee4ea16",
  measurementId: "G-GY8CYCH5XV"
};

const firebase = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;