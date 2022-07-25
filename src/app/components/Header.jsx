import { useDispatch, useSelector } from 'react-redux';
import { startGoogleLogout } from '@actions/auth';

import css from '@styles/Header.module.css';

export const Header = () => {
	const { name, photo } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	// Función que se encarga de disparar el logout.
	const onGoogleLogout = (e) => {
		e.preventDefault();
		dispatch(startGoogleLogout());
	};

	return (
		<header>
			<div className={css.content}>
				<div className={css.logo}>
					<i className='fas fa-camera-retro'></i>
				</div>

				<div className={css.information}>
					<div className={css.user}>
						<figure>
							<img src={photo} alt={`${name}-picture`} />
						</figure>
						<p>{name}</p>
					</div>

					<div className={css.exit}>
						<button type='button' onClick={onGoogleLogout}>
							<i className='fas fa-sign-out-alt'></i>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
