import axios from 'axios';

export const headerWithToken = axios.create({
	baseURL: `${import.meta.env.VITE_URL}/api/v1`,
});

headerWithToken.interceptors.request.use((config) => {
	config.headers['x-auth-token'] = localStorage.getItem('token');
	config.headers['ngrok-skip-browser-warning'] = true;
	return config;
});

export const tokenExpires = async () => {
	try {
		const response = await headerWithToken.get(`/admin/getQA?index=${1}&level=${1}`);
		if (response?.data?.responseObj?.responseMessage === 'Invalid Token.') {
			localStorage.removeItem('token');
			window.location.reload();
		}
		return response;
	} catch (error) {
		return error;
	}
};
