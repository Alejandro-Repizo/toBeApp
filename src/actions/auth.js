import { signInWithGoogle, logoutInGoogle } from '@firebaseConfig/providers';
import { types } from '@types/types';

// Acción encargada de iniciar el login con google
export const startGoogleLogin = () => {
	return async (dispatch) => {
		const result = await signInWithGoogle();
		if (result.status) {
			dispatch(login(result.uid, result.displayName, result.photoURL));
		}
	};
};

// Acción que actualiza el estado con la informacion del usuario
export const login = (uid, displayName, photoURL) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
		photoURL,
	},
});

// Acción que encargada del logout con google
export const startGoogleLogout = () => {
	return async (dispatch) => {
		await logoutInGoogle();
		dispatch(logout());
	};
};

// Acción que se encarga de actualizar el estado
export const logout = () => ({
	type: types.logout,
});
