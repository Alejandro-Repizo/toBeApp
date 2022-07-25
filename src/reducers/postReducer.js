import { types } from '@types/types';

/**
 * initial state
 *
 * {
 * 	posts: [],
 * user: {},
 * active: {
 * 	image: '',
 * 	owner: {
 * 		id: '',
 * 		title: '',
 * 		firstName: '',
 * 		lastName: '',
 * 		picture: '',
 * 	},
 * 	comments: [],
 * },
 * }
 */

const initialState = {
	posts: [],
	user: {},
	active: {
		image: '',
		owner: {
			id: '',
			title: '',
			firstName: '',
			lastName: '',
			picture: '',
		},
		comments: [],
	},
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.loadPosts: {
			return {
				...state,
				posts: [...action.payload],
			};
		}

		case types.loadUserInformation: {
			return {
				...state,
				user: {
					...action.payload,
				},
			};
		}

		case types.clearUserInformation: {
			return {
				...state,
				user: {},
			};
		}

		case types.loadComments: {
			return {
				...state,
				active: {
					...action.payload.user,
					comments: [...action.payload.comments],
				},
			};
		}

		default:
			return state;
	}
};
