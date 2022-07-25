import { types } from '@types/types';
import API from '@helper/api.js';

// Acción encargada de realizar la carga de los posts
export const startLoadPosts = () => {
	return async (dispatch) => {
		const posts = await API.loadPosts();
		dispatch(setPosts([...posts]));
	};
};

// Acción encargada de cargar los post en el estado
export const setPosts = (posts) => ({
	type: types.loadPosts,
	payload: posts,
});

// Acción encargada de realizar la carga de la información del usuario
export const startLoadUserInformation = (id) => {
	return async (dispatch) => {
		const data = await API.loadUserInformation(id);
		dispatch(setUserInformation(data));
	};
};

// Acción encargada de cargar la informacion del usuario en el estado
export const setUserInformation = (data) => ({
	type: types.loadUserInformation,
	payload: data,
});

// Acción encarga de eliminar la informacion del usuario del estado
export const setDeleteUserInformation = () => ({
	type: types.clearUserInformation,
});

// Acción encargada de realiar la carga de los comentarios
export const startLoadComments = (user, id) => {
	return async (dispatch) => {
		const data = await API.loadComments(id);
		dispatch(setComments(user, data));
	};
};

// Acción encarga de carga los comentarios en el estado
export const setComments = (user, comments) => ({
	type: types.loadComments,
	payload: {
		user,
		comments,
	},
});
