import { types } from '@types/types';

/**
 * initial state
 *
 * {
 *  uid: 01239232,
 *  name: 'Alejandro Repizo',
 *  photo: 'https://www.photo.com/photo1'
 * }
 */

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName,
				photo: action.payload.photoURL,
			};

		case types.logout:
			return {};

		default:
			return state;
	}
};
