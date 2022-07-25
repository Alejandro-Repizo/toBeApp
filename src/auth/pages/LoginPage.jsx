import { AuthLayout } from '../layout/AuthLayout';
import { LoginButton } from '../components/LoginButton';

import css from '@styles/LoginPage.module.css';

export const LoginPage = () => {
	return (
		<AuthLayout>
			<div className={css.form}>
				<div className={css['form__icon']}>
					<i className='fas fa-meteor'></i>
				</div>

				<h1 className={css['form__title']}>sign in</h1>
				
				<form className={css['form__form']}>
					<LoginButton />
				</form>
			</div>
		</AuthLayout>
	);
};
