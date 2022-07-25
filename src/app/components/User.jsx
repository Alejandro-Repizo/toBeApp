import { useSelector } from 'react-redux';

import css from '@styles/User.module.css';
import background from '@icons/figure_background.gif';

export const User = () => {
	const { user } = useSelector((state) => state.post);

	const { firstName, lastName, picture, gender, email, phone } = user;

	return (
		<div className={css.profile}>
			<figure className={css['profile__background']}>
				<img src={background} alt='Image background' />
			</figure>

			<section className={css['profile__information']}>
				<figure className={css['profile__userimage']}>
					<img src={picture} alt={`${firstName}-picture`} />
				</figure>

				<p className={css['profile__name']}>{`${firstName} ${lastName}`}</p>
				<p className={css['profile__gender']}>{`${gender}`}</p>
				<p className={css['profile__email']}>{`${email}`}</p>
				<p className={css['profile__phone']}>{`${phone}`}</p>
			</section>
		</div>
	);
};
