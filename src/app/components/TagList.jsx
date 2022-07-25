import PropTypes from 'prop-types';
import css from '@styles/TagList.module.css';

export const TagList = ({ children }) => {
	return <section className={css.tags}>{children}</section>;
};

TagList.propTypes = {
	childrenProp: PropTypes.element,
};
