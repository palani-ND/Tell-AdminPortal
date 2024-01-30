/* eslint-disable no-unused-vars */
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import { lazy } from 'react';
import Layout from './layout';

const ProtectedRoute = () => {
	const isAuthenticated = localStorage.getItem('token') ? true : false;
	return <>{isAuthenticated === true ? <Layout /> : <Navigate to="/" />}</>;
};

// const Login = lazy(() => import('./pages/login'));
// const Dashboard = lazy(() => import('./feature/dashboard/index'));
// const User = lazy(() => import('./feature/user/index'));
// const Quizans = lazy(() => import('./feature/Quizans/index'));
// const Settings = lazy(() => import('./feature/settings/index'));

import Login from './pages/login';
import Dashboard from './feature/dashboard/index';
import User from './feature/user/index';
import Quizans from './feature/Quizans/index';
import Settings from './feature/settings/index';

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route>
				<Route path="/" element={<Login />} />

				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/user" element={<User />} />
					<Route path="/quizans" element={<Quizans />} />
					<Route path="/settings" element={<Settings />} />
				</Route>
			</Route>
		</>
	)
);
