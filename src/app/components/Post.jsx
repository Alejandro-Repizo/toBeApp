import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setOpenModal } from '@actions/ui';
import { startLoadUserInformation, startLoadComments } from '@actions/post';

import css from '@styles/Post.module.css';

export const Post = ({ post, modal }) => {
	const { id, image, likes, tags, text, owner } = post;
	const dispatch = useDispatch();

	const onOpenModalUserInformation = (e) => {
		e.preventDefault();
		dispatch(setOpenModal(modal.user));
		dispatch(startLoadUserInformation(owner.id));
	};

	const onOpenModalPostComments = (e) => {
		e.preventDefault();
		dispatch(setOpenModal(modal.comments));
		dispatch(startLoadComments({ image, owner }, id));
	};

	return (
		<div className={css.post}>
			<div className={css['post__header']}>
				<figure className={css['post__avatar']}>
					<img src={owner.picture} alt={`${owner.firstName}-picture`} />
				</figure>

				<button
					type='button'
					className={css['post__username']}
					onClick={onOpenModalUserInformation}
				>
					<span>{`${owner.firstName} ${owner.lastName}`}</span>
				</button>
			</div>

			<figure className={css['post__image']}>
				<img src={image} alt='post image' />
			</figure>

			<div className={css['post__data']}>
				<section className={css['post__reactions']}>
					<span className={`${css['reaction']} ${css['reaction--hearth']}`}>
						<i className='fas fa-heart'></i> {likes} likes
					</span>

					<span className={`${css['reaction']} ${css['reaction--comment']}`}>
						<i className='far fa-comment'></i>
						<button
							type='button'
							className={css['reaction__btn']}
							onClick={onOpenModalPostComments}
						>
							comments
						</button>
					</span>
				</section>

				<section className={css['post__information']}>
					<p>{text}</p>
					<div className={css['post__tags']}>
						{tags.map((tag, index) => (
							<div key={`${tag}-${index}-post`} className={css['tag']}>
								{tag}
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

Post.propTypes = {
	post: PropTypes.object,
	modal: PropTypes.object,
};
