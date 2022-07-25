import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from './config';

// Nueva instancia de google provider
const googleProvider = new GoogleAuthProvider();

// Método que permite el singIn con google
export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(firebaseAuth, googleProvider);
		const { displayName, photoURL, uid } = result.user;

		return {
			status: true,
			displayName,
			photoURL,
			uid,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		return {
			status: false,
			errorCode,
			errorMessage,
		};
	}
};

// Método que permite el logout con google.
export const logoutInGoogle = async () => {
	return await firebaseAuth.signOut();
};
