import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';

export const AppRouter = () => {
	return (
		<Routes>
			{/* Home page */}
			<Route path='/' element={<HomePage />} />
		</Routes>
	);
};
