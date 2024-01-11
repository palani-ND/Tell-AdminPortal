import React, { useEffect } from 'react';
import SignUpScreen from '../../feature/signup/index';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const isAuthenticated = localStorage.getItem('token') ? true : false;
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated == true) {
			navigate('/home');
		}
	}, []);

	return <SignUpScreen />;
};

export default SignUp;
