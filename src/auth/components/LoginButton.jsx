import { useDispatch } from 'react-redux';
import { startGoogleLogin } from '@actions/auth';

import css from '@styles/LoginButton.module.css';

export const LoginButton = () => {
	// Dispatch
	const dispatch = useDispatch();

	// Funcion encargada de iniciar el logi
	const onGoogleLogin = (e) => {
		e.preventDefault();
		dispatch(startGoogleLogin());
	};

	return (
		<button type='button' className={css['btn-login']} onClick={onGoogleLogin}>
			<figure className={css.icon}>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
					alt='google button'
				/>
			</figure>
			<p className={css['btn-login__text']}>Sign in with google</p>
		</button>
	);
};
