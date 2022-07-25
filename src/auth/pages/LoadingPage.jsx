import css from '@styles/LoadingPage.module.css';

export const LoadingPage = () => {
	return (
		<div className={css.content}>
			<div className={css.loader}></div>
		</div>
	);
};
