import PropTypes from 'prop-types';
import css from '@styles/Tag.module.css';

export const Tag = ({ children }) => {
	return <button className={css['tag']}>{children}</button>;
};

Tag.propTypes = {
	childrenProp: PropTypes.element,
};
