import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAD1du19XdIizZ0l1h_RqqG3ur_C7f4gaY",
    authDomain: "firstpractice-7a721.firebaseapp.com",
    databaseURL: "https://firstpractice-7a721.firebaseio.com",
    projectId: "firstpractice-7a721",
    storageBucket: "",
    messagingSenderId: "253040861998",
    appId: "1:253040861998:web:82e1ef7a9b84b20e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase