/* eslint-disable no-unused-vars */
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout';

const ProtectedRoute = () => {
	const isAuthenticated = localStorage.getItem('token') ? true : false;
	return <>{isAuthenticated === true ? <Layout /> : <Navigate to="/" />}</>;
};


import Login from './pages/login';
import Dashboard from './feature/dashboard/index';
import User from './feature/user/index';
import Quizans from './feature/questionAndAnswer/index';
import Settings from './feature/settings/index';
import { useEffect } from 'react';

const Activetab = (WrappedComponent, componentName) => {
	// eslint-disable-next-line react/display-name
	return (props) => {
		useEffect(() => {
			localStorage.setItem('title', componentName);
		}, [componentName]);

		return <WrappedComponent {...props} />;
	};
};

const MentionedDashboard = Activetab(Dashboard, 'dashboard');
const MentionedUser = Activetab(User, 'user');
const MentionedQuestionans = Activetab(Quizans, 'Question & Answer');
const MentionedSettings = Activetab(Settings, 'Settings');

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route>
				<Route path="/" element={<Login />} />

				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<MentionedDashboard />} />
					<Route path="/user" element={<MentionedUser />} />
					<Route path="/question_and_answer" element={<MentionedQuestionans />} />
					<Route path="/settings" element={<MentionedSettings />} />
				</Route>
			</Route>
		</>
	)
);
