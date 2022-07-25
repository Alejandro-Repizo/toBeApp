import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { setCloseModal } from '@actions/ui';

import css from '@styles/Modal.module.css';

export const Modal = ({ children, id: idModal, handleCloseModal }) => {
	const { modal, id } = useSelector((state) => state.ui);
	const dispatch = useDispatch();

	// Función que se ejecuta al momento de cerrar el modal.
	const onCloseModal = (e) => {
		e.preventDefault();
		dispatch(setCloseModal(idModal));
		typeof handleCloseModal === 'function' && handleCloseModal();
	};

	return ReactDOM.createPortal(
		<div
			className={`${css.modal} ${
				id === idModal ? modal && css['modal__active'] : ''
			}`}
		>
			<div role='dialog' className={css['modal__content']}>
				<button
					type='button'
					className={css['modal__button-close']}
					onClick={onCloseModal}
				>
					<span>&times;</span>
				</button>

				{children}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

Modal.propTypes = {
	children: PropTypes.element,
	id: PropTypes.string.isRequired,
	handleCloseModal: PropTypes.func,
};
