/* eslint-disable no-unused-vars */
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Context } from './context';
import Layout from './layout';
import Login from './pages/login';
import Dashboard from './pages/dashboard/index';
import User from './pages/user/index';
import QuestionAndAnswer from './pages/questionAndAnswer/index';
import FileUpload from './pages/fileupload/index';
import Settings from './pages/settings/index';

const ProtectedRoute = () => {
	const isAuthenticated = localStorage.getItem('token') ? true : false;
	return <>{isAuthenticated === true ? <Layout /> : <Navigate to="/" />}</>;
};

const Activetab = (WrappedComponent, componentName) => {
	// eslint-disable-next-line react/display-name
	return (props) => {
		const { setSelectedTitle } = useContext(Context);
		useEffect(() => {
			setSelectedTitle(componentName);
			localStorage.setItem('title', componentName);
		}, [componentName]);
		return <WrappedComponent {...props} />;
	};
};

const MentionedDashboard = Activetab(Dashboard, 'dashboard');
const MentionedUser = Activetab(User, 'user');
const MentionedQuestionAndAnswer = Activetab(QuestionAndAnswer, 'Question & Answer');
const MentionedFileUpload = Activetab(FileUpload, 'Upload file');
const MentionedSettings = Activetab(Settings, 'Settings');

export const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route>
				<Route path="/" element={<Login />} />
				<Route element={<ProtectedRoute />}>
					<Route path="/dashboard" element={<MentionedDashboard />} />
					<Route path="/user" element={<MentionedUser />} />
					<Route path="/question_and_answer" element={<MentionedQuestionAndAnswer />} />
					<Route path="/fileupload" element={<MentionedFileUpload />} />
					<Route path="/settings" element={<MentionedSettings />} />
				</Route>
			</Route>
		</>
	)
);
