import firebase from "firebase";

const firebaseConfig = {
  apiKey: "sad.,fn21231303213sdf",
  authDomain: "bring-me-disney.firebaseapp.com",
  projectId: "bring-me-disney",
  storageBucket: "bring-me-disney.appspot.com",
  messagingSenderId: "73135430354",
  appId: "1:asdas23135adsf/lajf"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbConfig = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default dbConfig;
