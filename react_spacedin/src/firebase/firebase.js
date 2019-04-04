import firebase from 'firebase'

// Initialize Firebase
const config = {
	apiKey: 'AIzaSyDAozNPXBHJA4i64I4-6zqlseZW1MS5OtQ',
	authDomain: 'spaced-in.firebaseapp.com',
	databaseURL: 'https://spaced-in.firebaseio.com',
	projectId: 'spaced-in',
	storageBucket: 'spaced-in.appspot.com',
	messagingSenderId: '143945784274'
};

firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();
export {
	auth,
	database,
	db,
	googleAuthProvider,
	githubAuthProvider,
	facebookAuthProvider,
	twitterAuthProvider
};