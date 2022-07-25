import { types } from '@types/types';

/**
 * initial state
 *
 * {
 *  modal: boolean,
 * 	id: '',
 * }
 */

const initialState = {
	modal: false,
	id: '',
};

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.openModal: {
			return {
				...state,
				id: action.payload,
				modal: true,
			};
		}

		case types.closeModal: {
			return {
				...state,
				id: action.payload,
				modal: false,
			};
		}

		default:
			return state;
	}
};
