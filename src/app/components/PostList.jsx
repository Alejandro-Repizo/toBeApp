import PropTypes from 'prop-types';
import css from '@styles/PostList.module.css';

export const PostList = ({ children }) => {
	return <section className={css.content}>{children}</section>;
};

PostList.propTypes = {
	childrenProp: PropTypes.element,
};
