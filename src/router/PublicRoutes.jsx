import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoutes = ({ children }) => {
	const { uid } = useSelector((state) => state.auth);

	return !uid ? children : <Navigate to='/' replace={true} />;
};
