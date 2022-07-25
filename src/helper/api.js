import { API_KEY } from './constants.js';

class API {
	constructor(API_KEY) {
		this.API_KEY = API_KEY;
	}

	#baseAPI = 'https://dummyapi.io/data/v1/';

	get post() {
		return `${this.#baseAPI}post?limit=40`;
	}

	get comment() {
		return `${this.#baseAPI}post/:id/comment?limit=10`;
	}

	get user() {
		return `${this.#baseAPI}user/:id`;
	}

	// Método para cargar los posts
	async loadPosts() {
		const response = await fetch(this.post, {
			headers: {
				'app-id': this.API_KEY,
			},
		});
		const { data } = await response.json();

		return [...data];
	}

	// Método para cargar los comentarios
	async loadComments(id) {
		const response = await fetch(this.comment.replace(':id', id), {
			headers: {
				'app-id': this.API_KEY,
			},
		});
		const { data } = await response.json();

		return [...data];
	}

	// Método para cargar la información del usuario.
	async loadUserInformation(id) {
		const response = await fetch(this.user.replace(':id', id), {
			headers: {
				'app-id': this.API_KEY,
			},
		});
		const data = await response.json();

		return { ...data };
	}
}

// Hacemos la exportación de una nueva instacia de la clase API
export default new API(API_KEY);
