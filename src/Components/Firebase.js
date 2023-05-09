import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5vmY-Mmb6tdOv_hL8yDJiMbnWiFp992Y",
  authDomain: "bring-me-disney.firebaseapp.com",
  projectId: "bring-me-disney",
  storageBucket: "bring-me-disney.appspot.com",
  messagingSenderId: "71608001517",
  appId: "1:71608001517:web:61854f75d44c5dba927de4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default dbConfig;
