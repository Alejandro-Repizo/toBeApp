import PropTypes from 'prop-types';
import { Header } from '../components/Header';

import css from '@styles/AppLayout.module.css';

export const AppLayout = ({ children }) => {
	return (
		<div className={css.main}>
			<Header />
			<main className={css.content}>{children}</main>
		</div>
	);
};

AppLayout.propTypes = {
	children: PropTypes.element,
};
