import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBDjp81n2NOhtQGJXXqyP5MJ4ZEgADqisI',
	authDomain: 'copy-instagram-7283d.firebaseapp.com',
	projectId: 'copy-instagram-7283d',
	storageBucket: 'copy-instagram-7283d.appspot.com',
	messagingSenderId: '1017017010029',
	appId: '1:1017017010029:web:057664d05e9ae65a783c64',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export { firebaseApp, firebaseAuth };
