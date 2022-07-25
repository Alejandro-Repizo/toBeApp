import PropTypes from 'prop-types';
import css from '@styles/Comment.module.css';

export const Comment = ({ comment }) => {
	const {
		message,
		owner: { picture, firstName, lastName },
	} = comment;

	return (
		<div className={css['comment']}>
			<figure className={css['comment__userpicture']}>
				<img src={picture} alt={`${firstName}-picture`} />
			</figure>

			<section className={css['comment__content']}>
				<p className={css['comment__user']}>{`${firstName} ${lastName}`}</p>
				<p className={css['comment__comment']}>{message}</p>
			</section>
		</div>
	);
};

Comment.propTypes = {
	comment: PropTypes.object,
};
