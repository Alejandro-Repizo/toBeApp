import { useSelector } from 'react-redux';
import { Comment } from './Comment';

import css from '@styles/PostComments.module.css';

export const PostComments = () => {
	const { active: post } = useSelector((state) => state.post);

	const { image, owner: user, comments } = post;

	return (
		<div className={css['post-comments']}>
			<figure className={css['post-comments__image']}>
				<img src={image} alt={`${user.firstName}-picture-post`} />
			</figure>

			<section className={css['post-comments__content']}>
				<div className={css['userinfo']}>
					<figure className={css['userinfo__picture']}>
						<img src={user.picture} alt={`${user.firstName}-picture`} />
					</figure>

					<p>{`${user.firstName} ${user.lastName}`}</p>
				</div>

				<div className={css['post-comments__comments']}>
					{comments.map((comment) => (
						<Comment key={`${comment.id}-comment`} comment={{ ...comment }} />
					))}

					{comments.length === 0 && <p>No comments!</p>}
				</div>
			</section>
		</div>
	);
};
