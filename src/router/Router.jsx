import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { AppRouter } from '../app/routes/AppRoutes';
import { PublicRoutes } from './PublicRoutes';
import { ProtectedRoutes } from './ProtectedRoutes';
import { LoadingPage } from '../auth/pages/LoadingPage';

import { firebaseAuth } from '@firebaseConfig/config';
import { login } from '@actions/auth';
import { startLoadPosts } from '@actions/post';

export const Router = () => {
	const [checking, setChecking] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		// Se encarga de verificar si el usuario sigue logueado
		onAuthStateChanged(firebaseAuth, async (user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName, user.photoURL));
				dispatch(startLoadPosts());
			}
			setChecking(false);
		});
	}, []);

	if (checking) {
		return <LoadingPage />;
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/auth/*'
					element={
						<PublicRoutes>
							<AuthRoutes />
						</PublicRoutes>
					}
				/>

				<Route
					path='/*'
					element={
						<ProtectedRoutes>
							<AppRouter />
						</ProtectedRoutes>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
