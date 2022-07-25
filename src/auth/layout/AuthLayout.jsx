import PropTypes from 'prop-types';
import logo from '@icons/figure_login.svg';

import css from '@styles/AuthLayout.module.css';

export const AuthLayout = ({ children }) => {
	return (
		<main className={css.main}>
			<section className={css['main__figure']}>
				<figure className={css.figure}>
					<img
						src={logo}
						alt='Mujer sentada en un escritorio con un computador.'
					/>
				</figure>
			</section>

			<section className={css['main__form']}>{children}</section>
		</main>
	);
};

AuthLayout.propType = {
	children: PropTypes.element,
};
