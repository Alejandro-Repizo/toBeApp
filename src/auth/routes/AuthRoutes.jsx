import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';

export const AuthRoutes = () => {
	return (
		<Routes>
			{/* Login page */}
			<Route path='login' element={<LoginPage />} />
		</Routes>
	);
};
