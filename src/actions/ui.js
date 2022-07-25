import { types } from '@types/types';

// Acción que abre el modal
export const setOpenModal = (id) => ({
	type: types.openModal,
	payload: id,
});

// Acción que cierra el modal
export const setCloseModal = (id) => ({
	type: types.closeModal,
	payload: id,
});
