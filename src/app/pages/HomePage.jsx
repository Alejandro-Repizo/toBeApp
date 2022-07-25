import { useSelector, useDispatch } from 'react-redux';

import { AppLayout } from '../layout/AppLayout';
import {
	PostList,
	Post,
	Modal,
	User,
	TagList,
	PostComments,
	Tag,
} from '../components';

import { setDeleteUserInformation } from '@actions/post';

import css from '@styles/HomePage.module.css';

export const HomePage = () => {
	const tags = ['#hello', '#rami', '#reda', 'bone hands', 'dog'];
	const { posts } = useSelector((state) => state.post);
	const dispatch = useDispatch();

	// Funcion encargada de disparar la accion
	// para eliminar la informacion del usuario
	const onDeleteUserInformation = () => {
		dispatch(setDeleteUserInformation());
	};

	return (
		<AppLayout>
			<section className={css.content}>
				<PostList>
					{posts.map((post) => (
						<Post
							key={post.id}
							post={{ ...post }}
							modal={{
								user: 'user_information_modal',
								comments: 'post_comments_modal',
							}}
						/>
					))}
				</PostList>

				<TagList>
					{tags.map((tag, index) => (
						<Tag key={`tag-${index}`}>{tag}</Tag>
					))}
				</TagList>

				<Modal
					id='user_information_modal'
					handleCloseModal={onDeleteUserInformation}
				>
					<User />
				</Modal>

				<Modal id='post_comments_modal'>
					<PostComments />
				</Modal>
			</section>
		</AppLayout>
	);
};
