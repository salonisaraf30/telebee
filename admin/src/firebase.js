import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3DpUUPVDY-gRYQbUbTneSBhzsfM554OA",
  authDomain: "netflix-9d8bc.firebaseapp.com",
  projectId: "netflix-9d8bc",
  storageBucket: "netflix-9d8bc.appspot.com",
  messagingSenderId: "616400912349",
  appId: "1:616400912349:web:f26bdc336b6ef2f51f0034",
  measurementId: "G-Q05MX0KLGP"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
